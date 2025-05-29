# Prefer GitHub Skills Manager token if available
if [ "$GH_TOKEN" != "" ]; then
    GITHUB_TOKEN=$GH_TOKEN
fi

# Provide token
echo username=PersonalAccessToken
echo password=$GITHUB_TOKEN

# Exit with success so Git command doesn't fail
exit 0