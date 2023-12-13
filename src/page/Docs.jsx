import {useEffect} from 'react'

const Docs = ({pathname}) => {
    const url = 'https://docs.cardanogpt.ai/';
    const dir = {'learn': 'learn-the-concepts', 'disclaimer': 'disclaimer'}
    useEffect(() => {
        //get the optional path name
        //if no path name, redirect to the root of the docs
        if (!pathname) {
            window.location.replace(url);
            return;
        }
        window.location.replace(url + dir[pathname]);
    });
    return (
        null    
    )
}

export default Docs