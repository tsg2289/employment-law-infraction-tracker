import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/router'
import { supabase } from '../lib/supabase'
import AuthNav from '../components/AuthNav'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [data, setData] = useState({
    employees: [],
    wageHour: [],
    discrimination: [],
    retaliation: [],
    leaveOfAbsence: [],
    workplaceSafety: []
  })
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      fetchUserData()
    }
  }, [user])

  const fetchUserData = async () => {
    try {
      const [
        employeesRes,
        wageHourRes,
        discriminationRes,
        retaliationRes,
        leaveRes,
        safetyRes
      ] = await Promise.all([
        supabase.from('employees').select('*').eq('user_id', user.id),
        supabase.from('wage_hour_violations').select('*').eq('user_id', user.id),
        supabase.from('discrimination_harassment_violations').select('*').eq('user_id', user.id),
        supabase.from('retaliation_wrongful_termination_violations').select('*').eq('user_id', user.id),
        supabase.from('leave_of_absence_violations').select('*').eq('user_id', user.id),
        supabase.from('workplace_safety_violations').select('*').eq('user_id', user.id)
      ])

      setData({
        employees: employeesRes.data || [],
        wageHour: wageHourRes.data || [],
        discrimination: discriminationRes.data || [],
        retaliation: retaliationRes.data || [],
        leaveOfAbsence: leaveRes.data || [],
        workplaceSafety: safetyRes.data || []
      })
    } catch (error) {
      console.error('Error fetching user data:', error)
    } finally {
      setDataLoading(false)
    }
  }

  if (loading || !user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #e5e7eb', 
            borderTop: '4px solid #3b82f6', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <p style={{ color: '#6b7280' }}>Loading...</p>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <AuthNav />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '2rem' }}>
          Your Employment Law Cases
        </h1>

        {dataLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: '#6b7280' }}>Loading your data...</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Employees */}
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                Employee Information ({data.employees.length})
              </h2>
              {data.employees.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <th style={{ textAlign: 'left', padding: '0.5rem', color: '#6b7280' }}>Case ID</th>
                        <th style={{ textAlign: 'left', padding: '0.5rem', color: '#6b7280' }}>Name</th>
                        <th style={{ textAlign: 'left', padding: '0.5rem', color: '#6b7280' }}>Employer</th>
                        <th style={{ textAlign: 'left', padding: '0.5rem', color: '#6b7280' }}>Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.employees.map((employee, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid #f3f4f6' }}>
                          <td style={{ padding: '0.5rem' }}>{employee.case_id}</td>
                          <td style={{ padding: '0.5rem' }}>{employee.name}</td>
                          <td style={{ padding: '0.5rem' }}>{employee.employer}</td>
                          <td style={{ padding: '0.5rem' }}>{employee.position}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p style={{ color: '#6b7280' }}>No employee records found.</p>
              )}
            </div>

            {/* Wage Hour Violations */}
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                Wage & Hour Violations ({data.wageHour.length})
              </h2>
              {data.wageHour.length > 0 ? (
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {data.wageHour.map((violation, index) => (
                    <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <strong>{violation.name}</strong>
                        <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Case: {violation.case_id}</span>
                      </div>
                      <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{violation.employer}</p>
                      {violation.description && (
                        <p style={{ color: '#374151', fontSize: '0.875rem' }}>{violation.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: '#6b7280' }}>No wage & hour violations found.</p>
              )}
            </div>

            {/* Other violation types */}
            {[
              { key: 'discrimination', title: 'Discrimination & Harassment', data: data.discrimination },
              { key: 'retaliation', title: 'Retaliation & Wrongful Termination', data: data.retaliation },
              { key: 'leaveOfAbsence', title: 'Leave of Absence', data: data.leaveOfAbsence },
              { key: 'workplaceSafety', title: 'Workplace Safety', data: data.workplaceSafety }
            ].map(({ key, title, data: violations }) => (
              <div key={key} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                  {title} ({violations.length})
                </h2>
                {violations.length > 0 ? (
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {violations.map((violation, index) => (
                      <div key={index} style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <strong>{violation.name}</strong>
                          <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Case: {violation.case_id}</span>
                        </div>
                        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{violation.employer}</p>
                        {violation.description && (
                          <p style={{ color: '#374151', fontSize: '0.875rem' }}>{violation.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: '#6b7280' }}>No {title.toLowerCase()} violations found.</p>
                )}
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button
            onClick={() => router.push('/')}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Add New Case
          </button>
        </div>
      </div>
    </div>
  )
}
