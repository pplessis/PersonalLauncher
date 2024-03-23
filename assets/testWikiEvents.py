# Python 3
# Get information about this day in history from English Wikipedia

import datetime
import requests
import json
from os import path

today = datetime.datetime.now()
date = today.strftime('%m/%d')
data = None

OutputFilename = path.dirname(path.realpath(__file__)) + '/json_' +today.strftime('%m-%d') +'.json'

if ( not path.exists(OutputFilename) ):
    url = 'https://api.wikimedia.org/feed/v1/wikipedia/fr/onthisday/all/' + date

    headers = {
    #  'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    #  'User-Agent': 'YOUR_APP_NAME (YOUR_EMAIL_OR_CONTACT_PAGE)'

    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    ,'Accept-Encoding': 'gzip, deflate, br'
    ,'Accept-Language': 'fr-FR,fr;q=0.9'
    ,'Connection': 'keep-alive'
    ,'Host': 'api.wikimedia.org'
    ,'Sec-Fetch-Dest': 'document'
    ,'Sec-Fetch-Mode': 'navigate'
    ,'Sec-Fetch-Site': 'none'
    ,'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
    }

    response = requests.get(url, headers=headers)
    data = response.json()

    with open(OutputFilename, 'w') as f:
                f.write( json.dumps( data ) )
                f.flush()
else :
    with open(OutputFilename, 'r') as f:
        data = json.load( f )


print  ('List Events TODAY')
for event in data['events']:
    print ('Date: {1:>5} | Titre: {0}'.format(event['text'], event['year']) )



#print(data)




