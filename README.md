# Radio crawler
A simple Radio FM Stream crawler
This crawler use a simple Redis message queue for react to file download

Use Redis Message Queue for read and process file
[Redis Message Queue](https://github.com/smrchy/rsmq)
## .env file sample

```bash
REDIS_SERVER=localhost
REDIS_PORT=6379
MESSAGE_QUEUE_NAME=radio-crawler
FILE_STORAGE=/data/file
FILE_SIZE=100K
```