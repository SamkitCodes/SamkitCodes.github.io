---
title: "Celebrity Face Detector"
order: 2
summary: "Upload a photo and get the celebrities in it, named and boxed. A three-tier AWS app in 7 CloudFormation stacks: React on CloudFront and S3, an Express API on EC2 in a private subnet, and an event-driven Python Lambda that calls Rekognition. Secured with Cognito, least-privilege IAM and per-user quotas, with CI running cfn-lint, checkov, gitleaks and tests."
stack: ["CloudFormation", "Rekognition", "Lambda", "EC2", "React", "Node.js", "Python"]
link: https://github.com/SamkitCodes/celebrity-face-detector
---
