const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => 
{
    if (req.method === 'POST') 
	
	{
        collectRequestData(req, result => 
		{
            console.log(result);
            res.end(`Welcome, ${result.fname}`);
        });
    } 
    else
	{
        res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/" method="post">
                   Enter Your Name: <input type="text" name="fname" /><br />
                   
                    <button>Save</button>
                </form>
            </body>
            </html>
        `);
    }
});
server.listen(3000);

function collectRequestData(request, callback)
 {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) 
	{
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else 
	{
        callback(null);
    }
}