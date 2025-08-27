import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [state, setState] = useState({
    caseId: null,
    person: { name: '', email: '', employer: '', position: '' },
    wh: {},
    dh: {},
    ra: {},
    lv: {},
    sf: {}
  });

  const [currentPanel, setCurrentPanel] = useState('start');
  const [toast, setToast] = useState('');
  const [loading, setLoading] = useState(false);

  // Toast functionality
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2000);
  };

  // Switch panel
  const switchPanel = (panelId) => {
    setCurrentPanel(panelId);
  };

  // Form helpers
  const getValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value.trim() : '';
  };

  const getChecked = (id) => {
    const element = document.getElementById(id);
    return element ? element.checked : false;
  };

  const getCheckedValues = (selector) => {
    const elements = document.querySelectorAll(selector + ':checked');
    return Array.from(elements).map(el => el.value);
  };

  // API helpers
  const apiCall = async (endpoint, data) => {
    const response = await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Request failed');
    }

    return response.json();
  };

  // Save employee info
  const saveEmployee = async () => {
    const name = getValue('name');
    const email = getValue('email');
    const employer = getValue('employer');
    const position = getValue('position');

    if (!name || !employer) {
      showToast('Name and Employer are required');
      return;
    }

    setLoading(true);
    try {
      const result = await apiCall('employee', { name, email, employer, position });
      setState(prev => ({
        ...prev,
        caseId: result.caseId,
        person: { name, email, employer, position }
      }));
      showToast('Employee saved');
      switchPanel('wagehour');
    } catch (error) {
      showToast('Error: ' + error.message);
    }
    setLoading(false);
  };

  // Save wage & hour
  const saveWageHour = async () => {
    const payload = {
      caseId: state.caseId,
      ...state.person,
      overtimeUnpaid: getChecked('wh_ot'),
      mealBreakIssues: getChecked('wh_meal'),
      restBreakIssues: getChecked('wh_rest'),
      misclassification: getChecked('wh_misclass'),
      minimumWageIssues: getChecked('wh_minwage'),
      unpaidFinalWages: getChecked('wh_final'),
      offTheClock: getChecked('wh_offclock'),
      wageStatementIssues: getChecked('wh_wagestmt'),
      startDate: getValue('wh_start'),
      endDate: getValue('wh_end'),
      description: getValue('wh_desc')
    };

    setLoading(true);
    try {
      await apiCall('wage-hour', payload);
      setState(prev => ({ ...prev, wh: payload }));
      showToast('Wage & Hour saved');
    } catch (error) {
      showToast('Error: ' + error.message);
    }
    setLoading(false);
  };

  // Save discrimination & harassment
  const saveDiscriminationHarassment = async () => {
    const payload = {
      caseId: state.caseId,
      ...state.person,
      sexualHarassment: getChecked('dh_sexhar'),
      hostileWorkEnvironment: getChecked('dh_hostile'),
      failureToAccommodate: getChecked('dh_accomm'),
      failureToInteractiveProcess: getChecked('dh_interactive'),
      protectedClasses: getCheckedValues('#dh_classes input[type=checkbox]'),
      startDate: getValue('dh_start'),
      endDate: getValue('dh_end'),
      description: getValue('dh_desc')
    };

    setLoading(true);
    try {
      await apiCall('discrimination-harassment', payload);
      setState(prev => ({ ...prev, dh: payload }));
      showToast('Discrimination/Harassment saved');
    } catch (error) {
      showToast('Error: ' + error.message);
    }
    setLoading(false);
  };

  // Save retaliation & wrongful termination
  const saveRetaliation = async () => {
    const payload = {
      caseId: state.caseId,
      ...state.person,
      protectedActivities: getCheckedValues('.ra_pa'),
      adverseActions: getCheckedValues('.ra_aa'),
      dateOfAdverseAction: getValue('ra_date'),
      reasonGiven: getValue('ra_reason'),
      description: getValue('ra_desc')
    };

    setLoading(true);
    try {
      await apiCall('retaliation-wrongful-termination', payload);
      setState(prev => ({ ...prev, ra: payload }));
      showToast('Retaliation/Wrongful Termination saved');
    } catch (error) {
      showToast('Error: ' + error.message);
    }
    setLoading(false);
  };

  // Save leave of absence
  const saveLeave = async () => {
    const payload = {
      caseId: state.caseId,
      ...state.person,
      leaveTypes: getCheckedValues('.lv_type'),
      leaveDenied: getChecked('lv_denied'),
      notReinstated: getChecked('lv_notreinstated'),
      retaliation: getChecked('lv_retaliation'),
      startDate: getValue('lv_start'),
      endDate: getValue('lv_end'),
      description: getValue('lv_desc')
    };

    setLoading(true);
    try {
      await apiCall('leave-of-absence', payload);
      setState(prev => ({ ...prev, lv: payload }));
      showToast('Leave saved');
    } catch (error) {
      showToast('Error: ' + error.message);
    }
    setLoading(false);
  };

  // Save workplace safety
  const saveWorkplaceSafety = async () => {
    const payload = {
      caseId: state.caseId,
      ...state.person,
      hazards: getCheckedValues('.sf_haz'),
      reportedTo: getCheckedValues('.sf_rep'),
      retaliation: getChecked('sf_retaliation'),
      startDate: getValue('sf_start'),
      endDate: getValue('sf_end'),
      description: getValue('sf_desc')
    };

    setLoading(true);
    try {
      await apiCall('workplace-safety', payload);
      setState(prev => ({ ...prev, sf: payload }));
      showToast('Safety saved');
    } catch (error) {
      showToast('Error: ' + error.message);
    }
    setLoading(false);
  };

  // Review functionality
  const generateReview = () => {
    const p = state.person;
    const lines = [];

    if (!state.caseId) {
      return 'Save your basic info to start a summary.';
    }

    lines.push(`Case ID: ${state.caseId}`);
    lines.push(`${p.name} works/worked as ${p.position || '—'} at ${p.employer}. Contact: ${p.email || '—'}.`);

    if (Object.keys(state.wh).length) {
      const w = state.wh;
      const flags = [
        w.overtimeUnpaid && 'unpaid overtime',
        w.mealBreakIssues && 'meal breaks',
        w.restBreakIssues && 'rest breaks',
        w.misclassification && 'misclassification',
        w.minimumWageIssues && 'minimum wage',
        w.unpaidFinalWages && 'unpaid final wages',
        w.offTheClock && 'off‑the‑clock work',
        w.wageStatementIssues && 'wage statements'
      ].filter(Boolean).join(', ');
      lines.push(`Wage & Hour: issues noted (${flags || 'none checked'}). Period: ${dateRange(w.startDate, w.endDate)}. ${w.description || ''}`.trim());
    }

    if (Object.keys(state.dh).length) {
      const d = state.dh;
      const flags = [
        d.sexualHarassment && 'sexual harassment',
        d.hostileWorkEnvironment && 'hostile work environment',
        d.failureToAccommodate && 'failure to accommodate',
        d.failureToInteractiveProcess && 'failure to engage in the interactive process'
      ].filter(Boolean).join(', ');
      const classes = (d.protectedClasses || []).join(', ') || '—';
      lines.push(`Discrimination/Harassment: ${flags || 'none checked'}. Protected classes: ${classes}. Period: ${dateRange(d.startDate, d.endDate)}. ${d.description || ''}`.trim());
    }

    if (Object.keys(state.ra).length) {
      const r = state.ra;
      lines.push(`Retaliation/Wrongful Termination: protected activity (${(r.protectedActivities || []).join(', ') || '—'}); adverse actions (${(r.adverseActions || []).join(', ') || '—'}). Date: ${pretty(r.dateOfAdverseAction)}. Employer's stated reason: ${r.reasonGiven || '—'}. ${r.description || ''}`.trim());
    }

    if (Object.keys(state.lv).length) {
      const l = state.lv;
      lines.push(`Leave of Absence: types (${(l.leaveTypes || []).join(', ') || '—'}). Denied: ${l.leaveDenied ? 'Yes' : 'No'}. Not reinstated: ${l.notReinstated ? 'Yes' : 'No'}. Retaliation: ${l.retaliation ? 'Yes' : 'No'}. Period: ${dateRange(l.startDate, l.endDate)}. ${l.description || ''}`.trim());
    }

    if (Object.keys(state.sf).length) {
      const s = state.sf;
      lines.push(`Workplace Safety: hazards (${(s.hazards || []).join(', ') || '—'}). Reported to (${(s.reportedTo || []).join(', ') || '—'}). Retaliation: ${s.retaliation ? 'Yes' : 'No'}. Period: ${dateRange(s.startDate, s.endDate)}. ${s.description || ''}`.trim());
    }

    return lines.join('\n\n');
  };

  const dateRange = (a, b) => `${pretty(a)} – ${b ? pretty(b) : 'present'}`;
  const pretty = (s) => s ? new Date(s).toLocaleDateString() : '—';

  const copyReview = async () => {
    const text = generateReview();
    try {
      await navigator.clipboard.writeText(text);
      showToast('Summary copied');
    } catch (e) {
      showToast('Copy failed');
    }
  };

  return (
    <>
      <Head>
        <title>Employment Infractions Tracker</title>
        <meta name="description" content="Track employment law violations and infractions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrap">
        <aside className="sidebar">
          <div className="brand">🏛️ Employment Infractions Tracker</div>
          <div className="sheet-link">
            Data is stored locally in the application database.
          </div>
          <nav>
            <button
              className={currentPanel === 'start' ? 'active' : ''}
              onClick={() => switchPanel('start')}
            >
              Start
            </button>
            <button
              className={currentPanel === 'wagehour' ? 'active' : ''}
              disabled={!state.caseId}
              onClick={() => switchPanel('wagehour')}
            >
              Wage & Hour
            </button>
            <button
              className={currentPanel === 'disc' ? 'active' : ''}
              disabled={!state.caseId}
              onClick={() => switchPanel('disc')}
            >
              Discrimination & Harassment
            </button>
            <button
              className={currentPanel === 'retal' ? 'active' : ''}
              disabled={!state.caseId}
              onClick={() => switchPanel('retal')}
            >
              Retaliation & Wrongful Termination
            </button>
            <button
              className={currentPanel === 'leave' ? 'active' : ''}
              disabled={!state.caseId}
              onClick={() => switchPanel('leave')}
            >
              Leave of Absence
            </button>
            <button
              className={currentPanel === 'safety' ? 'active' : ''}
              disabled={!state.caseId}
              onClick={() => switchPanel('safety')}
            >
              Workplace Safety
            </button>
            <button
              className={currentPanel === 'review' ? 'active' : ''}
              disabled={!state.caseId}
              onClick={() => switchPanel('review')}
            >
              Review
            </button>
          </nav>
          <footer>
            Data is saved to the application database for review and export.
          </footer>
        </aside>

        <main className="content">
          {/* START: Employee info */}
          {currentPanel === 'start' && (
            <section className="card">
              <h2>Employee Information</h2>
              <div className="row">
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label htmlFor="employer">Employer</label>
                  <input id="employer" type="text" placeholder="ABC Corp" />
                </div>
                <div>
                  <label htmlFor="position">Position/Title</label>
                  <input id="position" type="text" placeholder="Sales Associate" />
                </div>
              </div>
              <div className="actions" style={{ marginTop: '10px' }}>
                <button className="btn" onClick={saveEmployee} disabled={loading}>
                  {loading ? 'Saving...' : 'Save & Continue'}
                </button>
                <span className="note">You'll unlock the category sidebars after saving.</span>
              </div>
              {state.caseId && (
                <div className="note" style={{ marginTop: '8px' }}>
                  Saved. Case ID: {state.caseId}
                </div>
              )}
            </section>
          )}

          {/* WAGE & HOUR */}
          {currentPanel === 'wagehour' && (
            <section className="card">
              <h2>Wage & Hour</h2>
              <div className="checkgrid">
                <label><input type="checkbox" id="wh_ot" /> Unpaid overtime</label>
                <label><input type="checkbox" id="wh_meal" /> Meal break issues</label>
                <label><input type="checkbox" id="wh_rest" /> Rest break issues</label>
                <label><input type="checkbox" id="wh_misclass" /> Misclassification</label>
                <label><input type="checkbox" id="wh_minwage" /> Minimum wage issues</label>
                <label><input type="checkbox" id="wh_final" /> Unpaid final wages</label>
                <label><input type="checkbox" id="wh_offclock" /> Off‑the‑clock work</label>
                <label><input type="checkbox" id="wh_wagestmt" /> Inaccurate wage statements</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Start date</label>
                  <input type="date" id="wh_start" />
                </div>
                <div>
                  <label>End date (if ongoing, leave blank)</label>
                  <input type="date" id="wh_end" />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="wh_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveWageHour} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Wage & Hour'}
                </button>
                <span className="note">Saved items appear in your database.</span>
              </div>
            </section>
          )}

          {/* DISCRIMINATION & HARASSMENT */}
          {currentPanel === 'disc' && (
            <section className="card">
              <h2>Discrimination & Harassment</h2>
              <div className="checkgrid">
                <label><input type="checkbox" id="dh_sexhar" /> Sexual harassment</label>
                <label><input type="checkbox" id="dh_hostile" /> Hostile work environment</label>
                <label><input type="checkbox" id="dh_accomm" /> Failure to accommodate</label>
                <label><input type="checkbox" id="dh_interactive" /> Failure to engage in interactive process</label>
              </div>
              <label style={{ marginTop: '10px' }}>Protected classes implicated (check all that apply)</label>
              <div className="checkgrid" id="dh_classes">
                <label><input type="checkbox" value="Race" /> Race</label>
                <label><input type="checkbox" value="Color" /> Color</label>
                <label><input type="checkbox" value="National origin" /> National origin</label>
                <label><input type="checkbox" value="Religion" /> Religion</label>
                <label><input type="checkbox" value="Sex/Gender" /> Sex/Gender</label>
                <label><input type="checkbox" value="Pregnancy" /> Pregnancy</label>
                <label><input type="checkbox" value="Sexual orientation" /> Sexual orientation</label>
                <label><input type="checkbox" value="Gender identity/expression" /> Gender identity/expression</label>
                <label><input type="checkbox" value="Age 40+" /> Age (40+)</label>
                <label><input type="checkbox" value="Disability" /> Disability</label>
                <label><input type="checkbox" value="Medical condition" /> Medical condition</label>
                <label><input type="checkbox" value="Marital status" /> Marital status</label>
                <label><input type="checkbox" value="Military/Veteran status" /> Military/Veteran status</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Start date</label>
                  <input type="date" id="dh_start" />
                </div>
                <div>
                  <label>End date (if ongoing, leave blank)</label>
                  <input type="date" id="dh_end" />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="dh_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveDiscriminationHarassment} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Discrimination/Harassment'}
                </button>
              </div>
            </section>
          )}

          {/* RETALIATION & WRONGFUL TERMINATION */}
          {currentPanel === 'retal' && (
            <section className="card">
              <h2>Retaliation & Wrongful Termination</h2>
              <label>Protected activities (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="ra_pa" value="Reported harassment/discrimination" /> Reported harassment/discrimination</label>
                <label><input type="checkbox" className="ra_pa" value="Reported wage/hour violations" /> Reported wage/hour violations</label>
                <label><input type="checkbox" className="ra_pa" value="Requested accommodation" /> Requested accommodation</label>
                <label><input type="checkbox" className="ra_pa" value="Requested/used protected leave" /> Requested/used protected leave</label>
                <label><input type="checkbox" className="ra_pa" value="Reported safety issue" /> Reported safety issue</label>
                <label><input type="checkbox" className="ra_pa" value="Whistleblowing/illegal conduct" /> Whistleblowing/illegal conduct</label>
              </div>
              <label style={{ marginTop: '10px' }}>Adverse actions (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="ra_aa" value="Termination" /> Termination</label>
                <label><input type="checkbox" className="ra_aa" value="Demotion" /> Demotion</label>
                <label><input type="checkbox" className="ra_aa" value="Pay cut" /> Pay cut</label>
                <label><input type="checkbox" className="ra_aa" value="Schedule reduction" /> Schedule reduction</label>
                <label><input type="checkbox" className="ra_aa" value="Discipline/write-ups" /> Discipline/write-ups</label>
                <label><input type="checkbox" className="ra_aa" value="Harassment" /> Harassment</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Date of adverse action</label>
                  <input type="date" id="ra_date" />
                </div>
                <div>
                  <label>Reason the employer gave (if any)</label>
                  <input type="text" id="ra_reason" placeholder="e.g., performance, restructuring..." />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="ra_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveRetaliation} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Retaliation/Wrongful Termination'}
                </button>
              </div>
            </section>
          )}

          {/* LEAVE OF ABSENCE */}
          {currentPanel === 'leave' && (
            <section className="card">
              <h2>Leave of Absence</h2>
              <label>Leave types (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="lv_type" value="CFRA/FMLA" /> CFRA/FMLA</label>
                <label><input type="checkbox" className="lv_type" value="Pregnancy Disability Leave (PDL)" /> Pregnancy Disability Leave (PDL)</label>
                <label><input type="checkbox" className="lv_type" value="Paid Sick Leave" /> Paid Sick Leave</label>
                <label><input type="checkbox" className="lv_type" value="Kin Care" /> Kin Care</label>
                <label><input type="checkbox" className="lv_type" value="Other/Local ordinance" /> Other/Local ordinance</label>
              </div>
              <div className="checkgrid" style={{ marginTop: '8px' }}>
                <label><input type="checkbox" id="lv_denied" /> Leave denied</label>
                <label><input type="checkbox" id="lv_notreinstated" /> Not reinstated to same/equivalent job</label>
                <label><input type="checkbox" id="lv_retaliation" /> Retaliation for leave</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Start date</label>
                  <input type="date" id="lv_start" />
                </div>
                <div>
                  <label>End date (if ongoing, leave blank)</label>
                  <input type="date" id="lv_end" />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="lv_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveLeave} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Leave'}
                </button>
              </div>
            </section>
          )}

          {/* WORKPLACE SAFETY */}
          {currentPanel === 'safety' && (
            <section className="card">
              <h2>Workplace Safety</h2>
              <label>Hazards (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="sf_haz" value="Unsafe conditions/equipment" /> Unsafe conditions/equipment</label>
                <label><input type="checkbox" className="sf_haz" value="Lack of required training" /> Lack of required training</label>
                <label><input type="checkbox" className="sf_haz" value="Missing PPE" /> Missing PPE</label>
                <label><input type="checkbox" className="sf_haz" value="Excessive heat/indoor heat" /> Excessive heat/indoor heat</label>
                <label><input type="checkbox" className="sf_haz" value="Chemical/air quality hazards" /> Chemical/air quality hazards</label>
                <label><input type="checkbox" className="sf_haz" value="Injury/incident occurred" /> Injury/incident occurred</label>
              </div>
              <label style={{ marginTop: '10px' }}>Reported to (check all that apply)</label>
              <div className="checkgrid">
                <label><input type="checkbox" className="sf_rep" value="Supervisor/HR" /> Supervisor/HR</label>
                <label><input type="checkbox" className="sf_rep" value="Cal/OSHA" /> Cal/OSHA</label>
                <label><input type="checkbox" className="sf_rep" value="Other" /> Other</label>
              </div>
              <div className="checkgrid" style={{ marginTop: '8px' }}>
                <label><input type="checkbox" id="sf_retaliation" /> Retaliation for reporting</label>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div>
                  <label>Start date</label>
                  <input type="date" id="sf_start" />
                </div>
                <div>
                  <label>End date (if ongoing, leave blank)</label>
                  <input type="date" id="sf_end" />
                </div>
              </div>
              <label style={{ marginTop: '10px' }}>Describe what happened</label>
              <textarea id="sf_desc" placeholder="Explain the situation in plain language..."></textarea>
              <div className="actions">
                <button className="btn" onClick={saveWorkplaceSafety} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Safety'}
                </button>
              </div>
            </section>
          )}

          {/* REVIEW */}
          {currentPanel === 'review' && (
            <section className="card">
              <h2>Review — Plain Language Summary</h2>
              <div className="review">
                <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                  {generateReview()}
                </pre>
              </div>
              <div className="actions" style={{ marginTop: '10px' }}>
                <button className="btn secondary" onClick={copyReview}>
                  Copy Summary
                </button>
                <span className="note">The full data lives in the application database.</span>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Toast */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </>
  );
}
