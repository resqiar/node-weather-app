
    /** 
     * TODO: Fetch API from created ENDPONT /weazher?find=
     */

    // fetch('/weazher?find=').then((response) => {
    //     response.json().then((data) => {
    //         if (data.error) {
    //             return console.log('Location not specified. Try again!');
    //         }

    //         console.log(data);
    //     })
    // })


    /** 
     * TODO: Wire up form to the back-end
     */

    const findForm = document.getElementById('find-form')
    const findInput = document.getElementById('find-input')

    findForm.addEventListener('submit', (e) => {
        e.preventDefault()

        /** 
         * TODO: FETCH API from /weazher?find=
         */

        const address = findInput.value

        fetch(`/weazher?find=${address}`).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    return findInput.error = "Please provide us locations"
                }
    
                console.log(data);
                /** 
                 * TODO: Pass the Data to UI
                 */

                 const location = document.getElementById('location')
                 const localtime = document.getElementById('local-time')
                 const degree = document.getElementById('degree')
                 const humidity = document.getElementById('humidity')
                 const forecast = document.getElementById('forecast')
                 const wind = document.getElementById('wind')
                 const windDir = document.getElementById('winddir')
                 let windDirElement = ''

                 location.innerText = data.location
                 localtime.innerText = data.time
                 degree.innerText = data.temp
                 humidity.innerText = data.humidity + '%'
                 forecast.innerText = data.weather
                 wind.innerText = data.windKmh + 'km/h'

                 if (data.wind_dir === 'E') {
                     windDirElement = 'East'
                 }else if (data.wind_dir === 'S') {
                     windDirElement = 'South'
                 }else if (data.wind_dir === 'N') {
                     windDirElement = 'North'
                 }else{
                     windDirElement = 'West'
                 }

                 windDir.innerText = windDirElement
            })
        })
    })