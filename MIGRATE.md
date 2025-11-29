# Migration Guide: docs-v1 to Mintlify

This document outlines the systematic migration approach, patterns, and transformations used to migrate documentation from the legacy docs-v1 structure to the new Mintlify-based documentation system.

## Migration Overview

### Project Context
- **Source**: docs-v1 (legacy documentation with 1,450+ files)
- **Target**: Mintlify documentation framework
- **Goal**: Maintain technical accuracy while improving user experience with modern components

### Key Objectives
1. **Preserve Technical Accuracy**: All code examples, configurations, and technical details must remain accurate
2. **Improve User Experience**: Enhance readability and navigation with modern Mintlify components
3. **Maintain SEO**: Preserve search optimization through proper frontmatter and structure
4. **Systematic Approach**: Use consistent patterns for reliable, scalable migration

## Completed Migrations

### Phase 1: Core Infrastructure (Completed)
1. **Google SSO Configuration** → `security/sso/google.mdx`
2. **Auth0 SSO Configuration** → `security/sso/auth0.mdx`
3. **Okta SSO Configuration** → `security/sso/okta.mdx`
4. **API Authentication** → `api/authentication.mdx`
5. **Python SDK Overview** → `sdk/python/overview.mdx`
6. **Python SDK API Reference** → `sdk/python/api-reference.mdx`
7. **Java SDK Overview** → `sdk/java/overview.mdx`

### Phase 2: Database Connectors (Completed)
8. **MySQL Database Connector** → `connectors/database/mysql.mdx`
9. **PostgreSQL Database Connector** → `connectors/database/postgres.mdx`
10. **Snowflake Cloud Data Warehouse** → `connectors/database/snowflake.mdx`
11. **Google BigQuery Connector** → `connectors/database/bigquery.mdx`
12. **Amazon Redshift Connector** → `connectors/database/redshift.mdx`
13. **Database Connectors Overview** → `connectors/database/overview.mdx`

### Phase 3: Infrastructure & Organization (Completed)
- **docs.json Cleanup**: Removed 1,000+ non-existent page references to eliminate 404 errors
- **Navigation Streamlining**: Created clean navigation structure with only existing pages
- **SDK Overview Enhancement** → `sdk/overview.mdx`
- **Navigation Updates**: Added database connectors overview to navigation structure

## Component Transformation Patterns

### 1. Header Conversion
**Source Pattern:**
```markdown
---
title: Page Title | OpenMetadata Feature
description: Description text
slug: /path/to/page
collate: false
---
```

**Target Pattern:**
```markdown
---
title: Page Title
description: 'Description text optimized for Mintlify'
---
```

**Rules:**
- Remove slug and collate fields
- Simplify title (remove branding suffixes)
- Ensure description is concise and quote-wrapped

### 2. Note/Warning Components
**Source Pattern:**
```markdown
{%note%}
Content here
{%/note%}

{%important%}
Security requirements for your **production** environment:
- Point 1
- Point 2
{%/important%}
```

**Target Pattern:**
```markdown
<Accordion title="Security Requirements for Production">
Security requirements for your **production** environment:
- Point 1
- Point 2
</Accordion>
```

**Rules:**
- Convert `{%note%}` to `<Accordion>` for expandable content
- Convert `{%important%}` to `<Accordion>` with descriptive titles
- Preserve markdown formatting within accordions

### 3. Connector Details Headers
**Source Pattern:**
```markdown
<ConnectorDetailsHeader
name="MySQL"
stage="PROD"
platform="OpenMetadata"
availableFeatures=["Metadata", "Data Profiler"]
unavailableFeatures=["Owners", "Tags"]
/>
```

**Target Pattern:**
```markdown
<CardGroup cols={3}>
  <Card title="Production Ready" icon="check-circle" color="#16a34a">
    Fully supported production connector
  </Card>
  <Card title="Metadata Discovery" icon="magnifying-glass">
    Automatic schema and table discovery
  </Card>
  <Card title="Data Lineage" icon="sitemap">
    Query-based lineage extraction
  </Card>
</CardGroup>

## Overview

The MySQL connector enables comprehensive metadata management...

### Supported Features

- ✅ **Metadata Discovery**: Automatic schema, table, and column discovery
- ✅ **Data Profiler**: Statistical analysis and data profiling
- ❌ **Owners**: Owner information extraction not supported
```

**Rules:**
- Replace connector headers with visual card groups
- Convert feature lists to checkmark/cross lists with descriptions
- Add overview section with connector purpose

### 4. Collate Branding
**Source Pattern:**
```markdown
OpenMetadata
openmetadata-ingestion
OpenMetadataClient
```

**Target Pattern:**
```markdown
Collate
collate-ingestion
CollateClient
```

**Rules:**
- Replace "OpenMetadata" with "Collate" in all text and code
- Update package names and class names consistently
- Maintain technical accuracy in examples

### 5. Configuration Examples
**Source Pattern:**
```yaml
authenticationConfiguration:
  provider: ${AUTHENTICATION_PROVIDER:-basic}
  publicKeyUrls: ${AUTHENTICATION_PUBLIC_KEYS:-[]}
```

**Target Pattern:**
```yaml
authenticationConfiguration:
  provider: basic
  publicKeyUrls: ["https://your-domain.com/api/v1/system/config/jwks"]
  authority: "https://your-domain.com"
  enableSelfSignup: true
```

**Rules:**
- Replace environment variable syntax with concrete examples
- Use realistic placeholder values
- Maintain YAML structure and indentation

## File Organization Patterns

### Directory Structure
```
docs-mintlify/
├── api/
│   ├── authentication.mdx
│   └── overview.mdx
├── connectors/
│   ├── database/
│   │   ├── mysql.mdx
│   │   └── postgres.mdx
│   └── overview.mdx
├── sdk/
│   ├── python/
│   │   ├── overview.mdx
│   │   └── api-reference.mdx
│   ├── java/
│   │   └── overview.mdx
│   └── overview.mdx
└── security/
    └── sso/
        ├── auth0.mdx
        ├── google.mdx
        └── okta.mdx
```

### Naming Conventions
- Use kebab-case for file names (`mysql.mdx`, `api-reference.mdx`)
- Group related content in subdirectories
- Maintain logical hierarchy that matches navigation structure

## Content Enhancement Patterns

### 1. Introduction Sections
**Add visual elements:**
```markdown
<CardGroup cols={3}>
  <Card title="Feature 1" icon="icon-name" color="#color">
    Description
  </Card>
</CardGroup>
```

### 2. Code Examples
**Enhance with context:**
```markdown
### Basic Authentication

```bash
# Get access token
curl -X POST "https://your-domain.com/api/v1/users/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@yourdomain.com",
    "password": "your-password"
  }'
```

### 3. Troubleshooting Sections
**Structure with accordions:**
```markdown
<Accordion title="Connection Issues">
**Common connection problems:**
- Problem 1
- Problem 2

**Solutions:**
- Solution 1
- Solution 2
</Accordion>
```

## Technical Migration Workflow

### 1. Pre-Migration Analysis
```bash
# Check existing file structure
find docs-v1 -name "*.md" | head -20

# Identify component patterns
grep -r "{% note %}" docs-v1/ | head -5
grep -r "connectorDetailsHeader" docs-v1/ | head -5
```

### 2. File Reading and Analysis
```bash
# Read source file
Read /path/to/docs-v1/source/file.md

# Analyze component usage and structure
# Identify transformation needs
```

### 3. Content Transformation
1. **Header Conversion**: Update frontmatter to Mintlify format
2. **Component Replacement**: Transform legacy components to Mintlify equivalents
3. **Content Enhancement**: Add visual elements and improve structure
4. **Branding Update**: Replace OpenMetadata with Collate consistently

### 4. Quality Assurance
- Verify all code examples are technically accurate
- Test navigation links and internal references
- Validate Mintlify component syntax
- Check responsive design elements

## docs.json Management

### Navigation Structure
```json
{
  "navigation": {
    "tabs": [
      {
        "tab": "Tab Name",
        "pages": ["page1", "page2"]
      },
      {
        "tab": "Grouped Content",
        "pages": [
          "overview",
          {
            "group": "Group Name",
            "pages": ["subpage1", "subpage2"]
          }
        ]
      }
    ]
  }
}
```

### Best Practices
1. **Only Include Existing Pages**: Prevent 404 errors by verifying file existence
2. **Logical Grouping**: Group related content under meaningful section names
3. **Progressive Addition**: Add navigation entries as content is migrated
4. **Consistent Naming**: Match navigation names to actual page titles

## Error Prevention

### Common Issues and Solutions

#### 1. 404 Errors
**Problem**: Navigation references non-existent pages
**Solution**: Audit docs.json against actual file structure regularly

#### 2. Component Syntax Errors
**Problem**: Invalid Mintlify component syntax
**Solution**: Use established patterns and test locally

#### 3. Broken Internal Links
**Problem**: Links pointing to non-migrated content
**Solution**: Update links progressively or use placeholder pages

#### 4. Inconsistent Branding
**Problem**: Mixed OpenMetadata/Collate references
**Solution**: Systematic find-and-replace with manual verification

## Future Migration Priorities

### High Priority (Next Phase)
1. **Database Connectors**: PostgreSQL, Snowflake, BigQuery
2. **Connector Overview Pages**: Create category landing pages
3. **Basic Administration**: User management, roles, policies

### Medium Priority
1. **Data Quality Guides**: Profiler, quality tests, incident management
2. **Data Governance**: Classification, glossary, domains
3. **Deployment Guides**: Docker, bare metal, cloud platforms

### Low Priority
1. **Advanced Features**: Workflows, automation, custom integrations
2. **Developer Guides**: API examples, custom connectors
3. **Troubleshooting**: Detailed problem-resolution guides

## Tools and Commands

### Development Setup
```bash
# Start development server
npm run dev

# Check for broken links
# (Manual verification during development)

# Validate navigation structure
# (Test all navigation items work correctly)
```

### Content Validation
```bash
# Find component patterns in source
grep -r "{% " docs-v1/ | grep -v ".git"

# Check for OpenMetadata references
grep -r "OpenMetadata" . --exclude-dir=node_modules

# Verify file structure matches navigation
# (Manual cross-reference with docs.json)
```

## Success Metrics

### Completed Achievements
- ✅ **Zero 404 Errors**: Cleaned navigation to only include existing content
- ✅ **Consistent Branding**: Systematic OpenMetadata → Collate transformation
- ✅ **Enhanced UX**: Modern Mintlify components improve readability
- ✅ **Technical Accuracy**: All code examples and configurations verified
- ✅ **Scalable Patterns**: Established reusable transformation patterns

### Ongoing Targets
- **Content Coverage**: Migrate 50+ high-priority pages from docs-v1
- **User Experience**: Maintain fast load times and intuitive navigation
- **Search Optimization**: Proper frontmatter and structure for discoverability
- **Maintenance Efficiency**: Clear patterns for future content updates

---

This migration guide serves as both documentation and reference for continuing the systematic transformation of docs-v1 content to the modern Mintlify framework. All patterns established here should be consistently applied to ensure quality and maintainability.