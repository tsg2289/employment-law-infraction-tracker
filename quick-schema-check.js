// Quick Schema Check - Paste in browser console
console.log('🔍 QUICK SCHEMA CHECK');
console.log('===================');

// Check for JSON-LD scripts
const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
console.log(`Found ${jsonLdScripts.length} JSON-LD scripts`);

if (jsonLdScripts.length === 0) {
    console.error('❌ NO JSON-LD SCRIPTS FOUND!');
    console.log('This explains why Rich Results Test shows no items.');
    console.log('');
    console.log('🔧 DEBUGGING STEPS:');
    console.log('1. Check if components are imported correctly');
    console.log('2. Verify _app.js has the JsonLd component');
    console.log('3. Check browser Network tab for component loading errors');
    console.log('4. Look for JavaScript errors in console');
} else {
    console.log('✅ JSON-LD scripts found!');
    jsonLdScripts.forEach((script, i) => {
        console.log(`\n📄 Script ${i + 1}:`);
        try {
            const data = JSON.parse(script.textContent);
            console.log('Content:', data);
        } catch (e) {
            console.error('❌ Invalid JSON:', e);
            console.log('Raw content:', script.textContent);
        }
    });
}

// Check for React components
console.log('\n🔍 REACT COMPONENT CHECK:');
const reactRoot = document.getElementById('__next');
if (reactRoot) {
    console.log('✅ React app root found');
} else {
    console.log('❌ React app root not found');
}

// Check for errors
const errors = window.console.error || [];
if (errors.length > 0) {
    console.log('\n⚠️ CONSOLE ERRORS DETECTED - Check for component loading issues');
}
