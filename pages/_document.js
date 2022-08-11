import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                

                    <link href="assets/img/favicon.png" rel="icon" />
                    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

                    <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                        rel="stylesheet"
                    />

                    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link
                        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
                        rel="stylesheet"
                    />
                    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
                    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

                    <link href="assets/css/style.css" rel="stylesheet" />
                </Head>
                <body>

                    <Main />
                    <NextScript />


                    <Script src="assets/vendor/aos/aos.js"/>
                    <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
                    <Script src="assets/vendor/glightbox/js/glightbox.min.js"/>
                    <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"/>
                    <Script src="assets/vendor/swiper/swiper-bundle.min.js"/>
                    <Script src="assets/vendor/waypoints/noframework.waypoints.js"/>
                    <Script src="assets/vendor/php-email-form/validate.js"/>

                    <Script src="assets/js/main.js"/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
