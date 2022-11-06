import './styles/AboutPage.css'

export default function About() {
    return (
        <div className="about-page container">
            <h3>NEWSOID - агрегатор новостей</h3>
            <p>
                Данное веб-приложение агрегирует новости информационных изданий разнообразной тематики.
            </p>
            <p>
                Newsoid предназначен для просмотра свежих постов различных медиа-ресурсов.
            </p>
            <p>
                Если у Вас есть какие-либо вопросы или предложения, 
                можете связаться с разработчиком по электронной почте.
            </p>
            <br/>
            <address>
                Developed by Artur P.<br/>
                <a href="mailto:artur.devproject@gmail.com">artur.devproject@gmail.com</a>
            </address>
        </div>
    )
}