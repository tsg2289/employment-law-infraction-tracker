// Schema Debug Tool - Run in browser console
// Copy and paste this into your browser console on any page to check schema

function analyzeSchema() {
    console.log('🔍 SCHEMA ANALYSIS STARTING...\n');
    
    // Find all JSON-LD scripts
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (scripts.length === 0) {
        console.error('❌ No JSON-LD schema found on this page');
        return;
    }
    
    console.log(`✅ Found ${scripts.length} JSON-LD script(s)\n`);
    
    scripts.forEach((script, index) => {
        try {
            const data = JSON.parse(script.textContent);
            console.log(`📊 Schema Block ${index + 1}:`);
            
            if (Array.isArray(data)) {
                data.forEach((item, i) => {
                    console.log(`   ${i + 1}. ${item['@type']} - ${item.name || item.headline || 'Unnamed'}`);
                });
            } else {
                console.log(`   • ${data['@type']} - ${data.name || data.headline || 'Unnamed'}`);
            }
            
            console.log('   Raw data:', data);
            console.log('');
            
        } catch (e) {
            console.error(`❌ Invalid JSON in script ${index + 1}:`, e);
        }
    });
    
    // Check for common schema types
    const allSchemas = [];
    scripts.forEach(script => {
        try {
            const data = JSON.parse(script.textContent);
            if (Array.isArray(data)) {
                allSchemas.push(...data);
            } else {
                allSchemas.push(data);
            }
        } catch (e) {}
    });
    
    const types = allSchemas.map(s => s['@type']).filter(Boolean);
    const uniqueTypes = [...new Set(types)];
    
    console.log('📋 SCHEMA SUMMARY:');
    console.log(`   Schema types found: ${uniqueTypes.join(', ')}`);
    
    // Validation checks
    const checks = {
        'Organization': types.includes('Organization'),
        'WebSite': types.includes('WebSite'),
        'SoftwareApplication': types.includes('SoftwareApplication'),
        'Article': types.includes('Article'),
        'FAQPage': types.includes('FAQPage'),
        'BreadcrumbList': types.includes('BreadcrumbList')
    };
    
    console.log('\n✅ VALIDATION CHECKLIST:');
    Object.entries(checks).forEach(([type, found]) => {
        console.log(`   ${found ? '✅' : '❌'} ${type}`);
    });
    
    console.log('\n🎯 RECOMMENDATIONS:');
    if (!checks.Organization) console.log('   • Add Organization schema');
    if (!checks.WebSite) console.log('   • Add WebSite schema');
    if (uniqueTypes.length === 0) console.log('   • No schema detected - check implementation');
    if (uniqueTypes.length > 0) console.log('   • Schema looks good! Test in Rich Results Tool');
    
    return { schemas: allSchemas, types: uniqueTypes, checks };
}

// Auto-run the analysis
console.log('🧪 Employment Law Tracker - Schema Debug Tool');
console.log('================================================');
analyzeSchema();
