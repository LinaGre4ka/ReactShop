function Footer() {
    return <footer className="page-footer orange accent-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} by Angelina Kurepina
                <a className="grey-text text-lighten-4 right" href="https://github.com/LinaGre4ka/Films">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };