#! /usr/bin/python -B

import sys
from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler


class myHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        h = """
<html>
<title>dp</title>
<body>
DP:
<textarea id="bind"></textarea>
</body>
</html>
"""
        self.send_response(200)
        self.send_header("Content-type", "text/html; charset=UTF-8")
        self.send_header("Content-Length", str(len(h)))
        self.end_headers()
        self.wfile.write(h)

    def do_POST(self):
        pass


HTTPServer(('', 8081), myHandler).serve_forever()
