#!/bin/bash

# --- Configuration ---
REMOTE_USER="ubuntu"  # Default AWS username
# ---------------------

# Parse command line arguments
while getopts k:h:s:u: opt; do
  case ${opt} in
    k)
      KEY_FILE=$OPTARG
      ;;
    h)
      HOSTNAME=$OPTARG
      ;;
    s)
      SERVICE_NAME=$OPTARG
      ;;
    u)
      REMOTE_USER=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
  esac
done

if [ -z "$KEY_FILE" ] || [ -z "$HOSTNAME" ] || [ -z "$SERVICE_NAME" ]; then
  echo "Usage: $0 -k <key-file.pem> -h <hostname> -s <service-name> [-u <remote-user>]"
  exit 1
fi

echo "----> Deploying static files for $SERVICE_NAME to $HOSTNAME..."

# Define remote directory
REMOTE_DIR="/var/www/html/$SERVICE_NAME"
SSH_CMD="ssh -i $KEY_FILE $REMOTE_USER@$HOSTNAME"

# 1. Clear out the previous distribution on the target
echo "      1. Clear out the previous distribution on the target."
$SSH_CMD "rm -rf $REMOTE_DIR && mkdir -p $REMOTE_DIR"
if [ $? -ne 0 ]; then
    echo "Error: Failed to clear or create remote directory."
    exit 1
fi

# 2. Copy the new files to the target
# This copies HTML, CSS, image files (.jpeg), and .htaccess
echo "      2. Copy the new files to the target."
scp -r -i $KEY_FILE *.html *.css *.jpeg .htaccess $REMOTE_USER@$HOSTNAME:$REMOTE_DIR/
if [ $? -ne 0 ]; then
    echo "Error: Failed to copy files."
    exit 1
fi

echo ""
echo "----> Deployment complete."
echo "      You can view your site at https://$HOSTNAME/$SERVICE_NAME"

