import react from "react";

class GoogleAuth extends react.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '878450286059-7i520laib86mc7jebs8kjok2tpc3hr94.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return <div>Google Auth</div>;
    };  
}

export default GoogleAuth;