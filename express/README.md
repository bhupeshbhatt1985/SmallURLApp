URL shortening MERN Application.
The Objective of this application is to short the long url and provide users with a short url , which can be used instead of that long url before the short url expires. Users can also provide their custom short urls which if available can be linked with that  long url.
I have used below technologies to accomplish this task.
Frontend technologies:
•	ReactJS & ReactHooks
•	HTML/CSS 
Backend technologies:
•	NodeJS 
•	Express
•	MongoDB
Deployment
•	Docker 
This Application supports below functionalities:
1)	Shorten given long URL:
This is the main objective of this application, uses can submit a valid long url and get a short url which can be used to go to the original long url.


2)	Redirect to original on accessing short UR
After getting the short url , it can be used diretly on the browsers and uses will be redirected to the original long url.


3)	URL Expiry
Every new short url comes with a expiry date. By default it is 24 hours and after 24 hours short url will send expiry message.

4)	Custom short URLs
Sometimes users wants a custom url instead of system generated url, they can achieve that here. But the condition is that the custom url should not be used earlier.
