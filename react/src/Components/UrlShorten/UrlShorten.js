import React, { useState } from 'react'
import { MdSend } from 'react-icons/md'


export const UrlShorten = () => {
    const [longUrl, setLongUrl] = useState("");
    const [customShortUrl, setCustomShortUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState("");


    const handleCustomShortUrlChange = (event) => {
        let customShortUrl = event.target.value;
        setCustomShortUrl(customShortUrl);
    }

    const handleLongUrlChange = (event) => {
        let longUrl = event.target.value;
        setLongUrl(longUrl);
    }

    const shortenUrl = () => {
        console.log('submit button pressed')
        let body = { longUrl: longUrl, customShortUrl: customShortUrl };
        fetch(`http://localhost:5000/api/url/shorten`, {
            method: "POST", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(response => {
                if (response.status === "success") {
                    setShortUrl(response.message);
                    setIsError(false)
                }
                else {
                    setErrorMessage(response.message);
                    setShortUrl("");
                    setIsError(true)
                }

            })
            .catch(error => console.log(error));

    }


    return (
        <>
            
            {isError && <div className={`alert alert-danger`}>{errorMessage}</div>}
            <div className="App">
                <div className="form-center">
                    <div className="form-group">
                        <label htmlFor="longUrl">Long Url</label>
                        <input type="text" className="form-control" id="longUrl" name="longUrl" placeholder="" value={longUrl} onChange={handleLongUrlChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="customShortUrl">Custom Short Url</label>
                        <input type="text" className="form-control" id="customShortUrl" name="customShortUrl" placeholder="" value={customShortUrl} onChange={handleCustomShortUrlChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="shortUrl">Short Url</label>
                        <a href={shortUrl} target="_blank" className="shortUrl">{shortUrl}</a>
                        {shortUrl && <p className="note">  All Short Urls are valid only for 24 hours</p>}
                    </div>
                </div>
                <button type="button" onClick={shortenUrl} className="btn">Submit<MdSend className="btn-icon" /></button>
            </div>
        </>

    )
}

export default UrlShorten
