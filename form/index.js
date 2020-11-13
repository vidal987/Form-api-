async function get() {
    try {
        const response = await fetch('http://localhost:3000/forms')
    }catch(error){
        console.error(error)
    }
}