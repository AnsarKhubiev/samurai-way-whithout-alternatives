export function App() {

    const tracks = [
        {
            id: 1,
            title: 'Music soundtrack',
            url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'
        },
        {
            id: 2,
            title: 'Music soundtrack instrumental',
            url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'
        },
    ]

    const newLiReactElements = tracks.map((track) => {
            return (
                <li key={track.id}>
                    <div>{track.title}</div>
                    <audio src={track.url} controls></audio>
                </li>
            )
        })


    return (
        <div>
            <h1>Music player</h1>
            <ul>
                {newLiReactElements}
            </ul>
        </div>
    )
}