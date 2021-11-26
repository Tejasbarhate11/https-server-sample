# HTTPS server on localhost using express

## Packages used
- express
- fs
- https

## Steps to run
- To run the server you will need a SSL certificate and a private key
- We will use command line program `openssl` to create the certificate and key
- Run `openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365` in the terminal
- After running the above command you will see two new files are generated. 
- To decrypt the key stored in `keytmp.pem` run `openssl rsa -in keytmp.pem -out key.pem` in the terminal
- Once we have the keys and certificate, we just need to include it in our server


## Running the sample
- After you start the server go to `https://localhost:30001`
- Don't worry if you see a warning/error from the browser
- The error is due to the fact that browsers have a list of trusted certificate authorities, and the certificate that we created might not be trusted by the broswer.
- To move forward, click on Advanced and then proceed.

