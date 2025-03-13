# information-gathering
Information Gathering Tool
This Python script gathers detailed information about a target domain, making it useful for penetration testers and security researchers.

Features
✅ Email Harvesting – Extracts email addresses from common pages of the target domain.
✅ IP Address Lookup – Resolves the target domain to its IP address.
✅ HTTP Headers Retrieval – Fetches and displays HTTP headers.
✅ SSL Certificate Information – Retrieves SSL certificate details.
✅ WHOIS Information – Retrieves domain ownership and registration details.
✅ Directory Discovery – Scans for common hidden directories on the target website.
✅ Security Headers Check – Fetches security headers for better vulnerability assessment.

Installation & Setup
Prerequisites
Ensure you have Python installed (3.x recommended). Install the required dependencies:

sh
Copy
Edit
pip install requests dnspython python-whois
Running the Script
Execute the script with:

sh
Copy
Edit
python info_gathering.py
When prompted, enter the target domain (e.g., example.com). The tool will perform various scans and display the results.

Modules Used
requests – For making HTTP requests.
socket – To resolve domain names and establish connections.
ssl – To retrieve SSL certificate information.
whois – For fetching domain registration details.
dns.resolver – To query DNS records.
re – For regex-based email extraction.
json – For formatting structured outputs.
time – For introducing delays in directory discovery to avoid rate limits.
Example Output
yaml
Copy
Edit
Enter the domain name (e.g., example.com): example.com

Starting Information Gathering...

IP Address: 93.184.216.34
HTTP Headers:
  Server: ECS
  Content-Type: text/html; charset=UTF-8
  Cache-Control: max-age=604800

SSL Certificate Information:
{
    "subject": "...",
    "issuer": "...",
    "notBefore": "..."
}

WHOIS Information for example.com:
  Domain Name: EXAMPLE.COM
  Registrar: IANA
  Creation Date: 1995-08-14
  Expiry Date: 2025-08-14

Directory Discovery:
  Found: http://example.com/admin/ (Status: 403)
  Found: http://example.com/login/ (Status: 200)

Security Headers:
  X-Frame-Options: DENY
  Content-Security-Policy: default-src 'self'
  
Email Harvesting:
  No emails found on the provided domain.

All tasks completed.
Disclaimer
⚠ This tool is for educational and ethical security testing purposes only. Unauthorized scanning of domains without permission may violate laws and regulations. Use responsibly.

This README gives a structured overview, making it clear and professional for users.
