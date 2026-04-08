const tracks = [
    {
        title: 'Music soundtrack',
        src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'
    },
    {
        title: 'Music soundtrack instrumental',
        src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'
    },
]

const rootEl = document.getElementById('root')

const headerEl = document.createElement('h1')
headerEl.append('Music player')
rootEl.append(headerEl)

const tracksEl = document.createElement('ul')
rootEl.append(tracksEl)

tracks.forEach(track => {
    const trackEl = document.createElement('li')
    const trackTitleEl = document.createElement('div')
    trackTitleEl.append(track.title)
    trackEl.append(trackTitleEl)
    tracksEl.append(trackEl)

    const trackPlayerEl = document.createElement('audio')
    trackPlayerEl.controls = true
    trackPlayerEl.src = track.src
    trackEl.append(trackPlayerEl)
})
