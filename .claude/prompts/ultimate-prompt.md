# ULTIMATE SYSTEMATIC CODEBASE ANALYSIS & TASK EXECUTION PROTOCOL
## With Plan-First Approval Workflow & Code Reuse Optimization

---

## MANDATORY WORKFLOW: PLAN → APPROVE → IMPLEMENT

### ⚠️ CRITICAL: NO CODE WITHOUT APPROVAL
```
WORKFLOW_STAGES:
  1. DISCOVER → Understand existing codebase
  2. ANALYZE → Find reusable components
  3. PLAN → Create detailed implementation plan
  4. PRESENT → Show plan with alternatives
  5. ⏸️ WAIT → Get explicit approval
  6. IMPLEMENT → Execute approved plan only
  7. VALIDATE → Test and verify
```

---

## PHASE -1: CODE REUSE INVESTIGATION [MANDATORY FIRST STEP]

### BEFORE WRITING ANY NEW CODE, ALWAYS:
```python
CODE_REUSE_CHECKLIST = {
    "search_existing": {
        "similar_functionality": [
            "Search for similar function names",
            "Look for related class implementations",
            "Check utility/helper modules",
            "Review shared/common directories"
        ],
        "patterns_in_use": [
            "Identify established patterns in codebase",
            "Find existing abstractions",
            "Locate base classes to extend",
            "Discover interfaces to implement"
        ],
        "libraries_available": [
            "Check installed dependencies",
            "Review internal packages",
            "Examine utility libraries",
            "Look for existing integrations"
        ]
    },
    "evaluate_reusability": {
        "can_extend": "Can we extend existing class?",
        "can_compose": "Can we compose existing functions?",
        "can_configure": "Can we parameterize existing code?",
        "can_generalize": "Can we make existing code more generic?",
        "can_wrap": "Can we wrap existing functionality?"
    },
    "document_findings": {
        "found_reusable": "List all reusable components",
        "found_similar": "List similar but not quite right code",
        "found_patterns": "List patterns to follow",
        "found_nothing": "Confirm genuinely new requirement"
    }
}

# REUSE DECISION MATRIX
def should_reuse_existing_code(existing_code, new_requirement):
    """
    ALWAYS PREFER REUSE IF:
    - Existing code covers ≥70% of requirement
    - Modification effort < writing from scratch
    - Existing code is well-tested
    - Existing code is documented

    CREATE NEW ONLY IF:
    - No similar code exists
    - Existing code would need >50% changes
    - Existing code has known issues
    - Performance requirements differ significantly
    """
    return reuse_score > 0.7
```

### Reuse Search Patterns
```bash
# Search commands to run BEFORE writing new code:

# 1. Search for similar function names
grep -r "function_name_pattern" --include="*.py" .

# 2. Search for similar class implementations
find . -name "*.py" -exec grep -l "class.*Similar" {} \;

# 3. Search for imports that might indicate existing solutions
grep -r "^import.*relevant_module" --include="*.py" .

# 4. Search for TODO comments mentioning similar features
grep -r "TODO.*feature_keyword" .

# 5. Search for existing tests that might reveal reusable code
find . -path "*/test*" -name "*.py" -exec grep -l "test.*feature" {} \;
```

---

## PHASE 0: MENTAL MODEL INITIALIZATION

### Core Engineering Principles to Apply
```
ALWAYS ACTIVE PRINCIPLES:
├── DRY (Don't Repeat Yourself) - CHECK EXISTING CODE FIRST!
├── SOLID Principles
│   ├── Single Responsibility: One class, one purpose
│   ├── Open/Closed: Open for extension, closed for modification
│   ├── Liskov Substitution: Derived classes must be substitutable
│   ├── Interface Segregation: Many specific interfaces > one general
│   └── Dependency Inversion: Depend on abstractions, not concretions
├── KISS (Keep It Simple, Stupid)
├── YAGNI (You Aren't Gonna Need It)
├── Law of Demeter (Principle of Least Knowledge)
├── Composition over Inheritance
├── Fail Fast Principle
└── REUSE > REBUILD (Always check existing code first)
```

### Clean Code Commandments
1. **Check for existing implementations FIRST**
2. **Names reveal intent**: `getUserById()` not `getData()`
3. **Functions do ONE thing**: <20 lines, <3 parameters ideal
4. **Comments explain WHY, not WHAT**
5. **No magic numbers**: Use named constants
6. **Avoid deep nesting**: Early returns, guard clauses
7. **Delete dead code**: Don't comment out, delete it
8. **Consistency > Personal Preference**
9. **Reuse existing patterns in the codebase**

---

## PHASE 1: COMPREHENSIVE CODEBASE DISCOVERY & ANALYSIS

### 1.1 Architecture Recognition
```
IDENTIFY ARCHITECTURE PATTERN:
├── Monolithic
│   └── Layered (MVC, MVP, MVVM)
├── Microservices
│   └── Service boundaries and communication
├── Serverless
│   └── Function organization
├── Event-Driven
│   └── Event flows and handlers
├── Domain-Driven Design
│   └── Bounded contexts and aggregates
└── Hexagonal/Ports & Adapters
    └── Core domain vs infrastructure

DOCUMENT EXISTING PATTERNS FOR REUSE!
```

### 1.2 Complete File System Analysis with Reuse Mapping
```bash
# Execute systematic discovery with reuse focus:
find . -type f -name "*" | while read file; do
  echo "=== $file ==="
  # Classify file purpose and reusability:
  # - Source code (CHECK FOR REUSABLE FUNCTIONS)
  # - Configuration (NOTE EXISTING PATTERNS)
  # - Tests (UNDERSTAND TESTING PATTERNS)
  # - Documentation (FOLLOW EXISTING STYLE)
  # - Build/Deploy scripts (REUSE EXISTING PIPELINES)
  # - Utilities/Helpers (HIGH REUSE POTENTIAL)
  # - Generated files (ignore)
done
```

### 1.3 Codebase Reuse Inventory
```python
REUSE_INVENTORY = {
    "utility_functions": {
        "validation": "List all validation functions",
        "transformation": "Data transformation utilities",
        "formatting": "Formatters and serializers",
        "helpers": "Generic helper functions"
    },
    "base_classes": {
        "models": "Base model classes",
        "controllers": "Base controllers",
        "services": "Base service classes",
        "repositories": "Base repository patterns"
    },
    "common_patterns": {
        "error_handling": "How errors are handled",
        "logging": "Logging patterns used",
        "authentication": "Auth implementations",
        "authorization": "Permission patterns"
    },
    "configurations": {
        "database": "Connection patterns",
        "api_clients": "HTTP client patterns",
        "caching": "Cache implementations",
        "queuing": "Message queue patterns"
    },
    "testing_patterns": {
        "mocks": "Common mock patterns",
        "fixtures": "Test data patterns",
        "assertions": "Custom assertions",
        "helpers": "Test helper functions"
    }
}
```

---

## PHASE 2: PLANNING & APPROVAL WORKFLOW

### 2.1 MANDATORY Implementation Plan Template
```markdown
# IMPLEMENTATION PLAN FOR: [Task Name]
Date: [Current Date]
Author: [Claude Code]
Status: ⏸️ AWAITING APPROVAL

## 1. TASK UNDERSTANDING
### What needs to be done:
[Clear description of the requirement]

### Why this is needed:
[Business justification]

### Success criteria:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## 2. EXISTING CODE ANALYSIS
### Reusable components found:
| Component | Location | Can Reuse? | Modifications Needed |
|-----------|----------|------------|---------------------|
| Function A | path/to/file.py:123 | ✅ Yes | None |
| Class B | path/to/class.py | ⚠️ Partial | Need to extend |
| Module C | path/to/module | ❌ No | Too different |

### Patterns to follow:
- Pattern 1: [Description] (used in: path/to/example)
- Pattern 2: [Description] (used in: path/to/example)

### Why we can't reuse everything:
[Explain what's genuinely new and why]

## 3. PROPOSED SOLUTION

### Approach A (Recommended) - Maximum Reuse
```
IMPLEMENTATION:
├── Reuse existing UserService class
├── Extend current validation middleware
├── Add only new business logic method
└── Utilize existing error handling

PROS:
- 70% code reuse
- Consistent with existing patterns
- Minimal testing needed
- Fast implementation

CONS:
- Slightly less optimized
- Need to refactor one method

TIME ESTIMATE: 2 hours
```

### Approach B (Alternative) - Partial Reuse
```
IMPLEMENTATION:
├── Create new service class
├── Reuse validation functions
├── Implement custom logic
└── Integrate with existing system

PROS:
- More optimized solution
- Cleaner separation

CONS:
- 40% code reuse only
- More testing required
- Longer implementation

TIME ESTIMATE: 4 hours
```

### Approach C (Not Recommended) - Build from Scratch
```
[Explain why not recommended but include for completeness]
```

## 4. IMPLEMENTATION STEPS
### Pre-implementation:
- [ ] Review existing tests
- [ ] Backup current state
- [ ] Set up local environment

### Implementation sequence:
1. **Step 1**: [Description] (15 min)
   - Reusing: [existing component]
   - New code: [what needs to be written]

2. **Step 2**: [Description] (30 min)
   - Reusing: [existing component]
   - New code: [what needs to be written]

3. **Step 3**: [Description] (20 min)
   - Testing approach
   - Validation method

### Post-implementation:
- [ ] Run existing test suite
- [ ] Add new tests
- [ ] Update documentation
- [ ] Code review

## 5. RISK ASSESSMENT
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Breaking existing feature | Low | High | Comprehensive testing |
| Performance degradation | Medium | Medium | Benchmark before/after |
| Integration issues | Low | Medium | Use existing patterns |

## 6. ROLLBACK PLAN
```bash
# If implementation fails:
1. git revert <commit-hash>
2. Restore database backup (if needed)
3. Clear cache
4. Restart services
5. Run health checks
```

## 7. QUESTIONS FOR APPROVAL
1. Is Approach A acceptable given the tradeoffs?
2. Any specific concerns about reusing [component]?
3. Should we prioritize optimization over reuse?
4. Any additional requirements not captured?

## 📋 APPROVAL CHECKLIST
- [ ] Approach selected: [A/B/C]
- [ ] Modifications approved
- [ ] Timeline acceptable
- [ ] Risks acknowledged
- [ ] Questions answered

**⏸️ WAITING FOR YOUR APPROVAL TO PROCEED...**

Reply with:
- "APPROVED: Approach A" to proceed with recommended approach
- "APPROVED: Approach B" for alternative
- "MODIFY: [specific changes]" to adjust plan
- "REJECT: [reason]" to reconsider
```

### 2.2 Approval Response Handler
```python
APPROVAL_WORKFLOW = {
    "states": {
        "PLANNING": "Creating implementation plan",
        "AWAITING_APPROVAL": "Plan complete, waiting for approval",
        "APPROVED": "Plan approved, implementing",
        "IMPLEMENTING": "Currently executing approved plan",
        "TESTING": "Implementation complete, testing",
        "COMPLETE": "Task finished successfully",
        "REJECTED": "Plan rejected, revising"
    },

    "valid_responses": {
        "APPROVED": "Proceed with implementation",
        "MODIFY": "Adjust plan based on feedback",
        "REJECT": "Create alternative plan",
        "CLARIFY": "Need more information"
    },

    "on_approval": """
        1. Confirm approach selected
        2. Begin implementation EXACTLY as planned
        3. No deviations without re-approval
        4. Report progress at checkpoints
    """,

    "on_modify": """
        1. Incorporate feedback
        2. Update plan document
        3. Re-submit for approval
        4. Wait for new approval
    """,

    "on_reject": """
        1. Understand rejection reasons
        2. Research alternatives
        3. Create new plan
        4. Submit revised proposal
    """
}
```

---

## PHASE 3: DEEP FILE ANALYSIS WITH REUSE FOCUS

### 3.1 Pattern Mining for Reuse
```python
def analyze_for_reuse(file_path):
    """
    Extract reusable patterns and components
    """
    patterns = {
        "functions": extract_function_signatures(file_path),
        "classes": extract_class_definitions(file_path),
        "decorators": extract_decorators(file_path),
        "constants": extract_constants(file_path),
        "type_definitions": extract_types(file_path),
        "error_handlers": extract_error_patterns(file_path),
        "validators": extract_validation_patterns(file_path),
        "transformers": extract_transformation_patterns(file_path)
    }

    # Score reusability
    for component in patterns:
        component["reusability_score"] = calculate_reuse_potential(component)
        component["dependencies"] = analyze_dependencies(component)
        component["test_coverage"] = check_test_coverage(component)

    return patterns
```

### 3.2 Design Pattern Detection for Reuse
```
FOR each file:
  IDENTIFY reusable patterns:
    Creational (for object creation reuse):
      □ Factory classes to reuse
      □ Builder patterns to extend
      □ Singleton instances to utilize

    Structural (for composition reuse):
      □ Adapters to leverage
      □ Decorators to apply
      □ Facades to utilize
      □ Proxies to reuse

    Behavioral (for logic reuse):
      □ Strategy implementations
      □ Observer patterns
      □ Command patterns
      □ Template methods to override

    Modern Patterns (for architecture reuse):
      □ Repository implementations
      □ Service layers
      □ Middleware chains
      □ Event handlers
```

---

## PHASE 4: ADVANCED TASK DECOMPOSITION WITH REUSE PRIORITY

### 4.1 Task Breakdown with Reuse Analysis
```yaml
TASK_DECOMPOSITION:
  main_task:
    reuse_analysis:
      existing_solution_coverage: "60%"
      components_to_reuse:
        - name: "AuthenticationService"
          coverage: "100%"
          location: "src/services/auth.js"
        - name: "ValidationMiddleware"
          coverage: "80%"
          location: "src/middleware/validation.js"
          modifications_needed: "Add new validation rule"
      new_components_needed:
        - name: "CustomBusinessLogic"
          reason: "Specific to this requirement"
          estimated_loc: 50

    implementation_plan:
      phase_1_reuse:
        - step: "Import existing services"
        - step: "Configure for new use case"
        - step: "Test with existing test suite"

      phase_2_extend:
        - step: "Extend base classes"
        - step: "Override specific methods"
        - step: "Add new properties"

      phase_3_new:
        - step: "Implement only truly new logic"
        - step: "Integrate with existing system"
        - step: "Follow established patterns"
```

---

## PHASE 5: ENHANCED SERENA MCP PROTOCOL WITH REUSE

### 5.1 MCP Tool Usage for Code Discovery
```python
MCP_REUSE_COMMANDS = {
    "discover_similar_code": {
        "command": "mcp.search_codebase",
        "parameters": {
            "patterns": ["similar_function_names", "similar_class_names"],
            "include_tests": True,
            "include_comments": True
        }
    },
    "analyze_dependencies": {
        "command": "mcp.analyze_imports",
        "parameters": {
            "find_common_imports": True,
            "find_utility_modules": True
        }
    },
    "find_examples": {
        "command": "mcp.find_usage_examples",
        "parameters": {
            "pattern": "pattern_to_follow",
            "limit": 10
        }
    },
    "check_test_coverage": {
        "command": "mcp.coverage_report",
        "parameters": {
            "include_untested": True,
            "find_similar_tests": True
        }
    }
}

# Use MCP to find reusable code
async def find_reusable_components(requirement):
    # Search for similar implementations
    similar = await mcp.search_codebase(
        query=requirement,
        include=["functions", "classes", "modules"],
        similarity_threshold=0.7
    )

    # Analyze each match for reusability
    for match in similar:
        match["can_reuse"] = await analyze_reusability(match)
        match["modification_effort"] = await estimate_modification(match)

    return similar
```

---

## PHASE 6: CODE QUALITY & REUSE PRINCIPLES

### 6.1 Reuse-First Development
```python
REUSE_PRINCIPLES = {
    "search_before_write": {
        "rule": "ALWAYS search for existing code first",
        "time_investment": "Spend 15-30 min searching before writing",
        "search_locations": [
            "Current module",
            "Related modules",
            "Utility/Common folders",
            "Third-party libraries",
            "Company shared libraries"
        ]
    },
    "extend_before_duplicate": {
        "rule": "Extend existing classes rather than creating new",
        "benefits": [
            "Maintains consistency",
            "Reduces testing burden",
            "Preserves existing functionality",
            "Faster implementation"
        ]
    },
    "compose_before_inherit": {
        "rule": "Use composition to combine existing functionality",
        "example": "Combine existing validators rather than writing new"
    },
    "configure_before_code": {
        "rule": "Use configuration to modify behavior",
        "example": "Pass parameters to existing functions"
    },
    "generalize_for_reuse": {
        "rule": "When writing new code, make it reusable",
        "guidelines": [
            "Use parameters instead of hardcoding",
            "Create pure functions",
            "Avoid tight coupling",
            "Write comprehensive tests"
        ]
    }
}
```

### 6.2 Code Review Checklist with Reuse Focus
```markdown
## CODE REVIEW CHECKLIST

### Reuse Verification
- [ ] Did you search for existing similar code?
- [ ] List components you're reusing: ___________
- [ ] Justify why new code was necessary: ___________
- [ ] Could this new code be made more reusable?
- [ ] Are you following existing patterns?

### Quality Checks
- [ ] No code duplication (DRY principle)
- [ ] Consistent with codebase style
- [ ] Proper error handling
- [ ] Adequate test coverage
- [ ] Documentation updated
- [ ] Performance acceptable
- [ ] Security reviewed
- [ ] Accessibility compliant
```

---

## PHASE 7: IMPLEMENTATION EXECUTION (POST-APPROVAL ONLY)

### 7.1 Implementation Guards
```python
class ImplementationGuard:
    """Ensures no implementation without approval"""

    def __init__(self):
        self.approval_status = None
        self.approved_plan = None
        self.deviations = []

    def can_implement(self, task):
        """Check if implementation is allowed"""
        if not self.approval_status:
            raise Exception("❌ NO APPROVAL! Must get plan approved first!")

        if task not in self.approved_plan:
            raise Exception("❌ Task not in approved plan! Need re-approval!")

        return True

    def track_deviation(self, planned, actual):
        """Track any deviations from plan"""
        if planned != actual:
            self.deviations.append({
                "planned": planned,
                "actual": actual,
                "timestamp": now(),
                "requires_reapproval": self.is_major_deviation(planned, actual)
            })

            if self.is_major_deviation(planned, actual):
                raise Exception("❌ Major deviation! Need re-approval!")

    def is_major_deviation(self, planned, actual):
        """Determine if deviation requires re-approval"""
        return any([
            actual.creates_new_file and not planned.creates_new_file,
            actual.modifies_different_file,
            actual.changes_architecture,
            actual.adds_dependency,
            actual.removes_functionality
        ])
```

### 7.2 Progress Reporting Template
```markdown
## IMPLEMENTATION PROGRESS UPDATE

**Task**: [Task name]
**Status**: 🟡 IN PROGRESS
**Approved Approach**: [A/B/C]
**Started**: [Timestamp]
**Expected Completion**: [Timestamp]

### ✅ Completed Steps:
1. [Step 1] - Reused `ExistingComponent` ✓
2. [Step 2] - Extended `BaseClass` ✓

### 🔄 Current Step:
[Step 3] - Implementing new validation logic
- Reusing: `validateUser()` from auth module
- New code: Adding age verification

### ⏭️ Remaining Steps:
4. [Step 4] - Testing
5. [Step 5] - Documentation

### 📊 Metrics:
- Lines of code reused: 245
- New lines written: 47
- Test coverage: 87%
- All existing tests: ✅ Passing

### ⚠️ Issues/Deviations:
- None (or list any deviations)

### 💡 Discoveries:
- Found additional reusable component: `CacheManager`
- Can simplify Step 4 by reusing existing test fixtures

**Next Update In**: 30 minutes
```

---

## PHASE 8: TESTING WITH REUSE VERIFICATION

### 8.1 Reuse Testing Strategy
```python
TEST_REUSE_VERIFICATION = {
    "regression_tests": {
        "purpose": "Ensure reused components still work",
        "run": "All existing tests for reused components",
        "expected": "100% pass rate"
    },
    "integration_tests": {
        "purpose": "Verify new code works with reused code",
        "focus": [
            "Connection points",
            "Data flow",
            "Error propagation",
            "Performance impact"
        ]
    },
    "comparison_tests": {
        "purpose": "Compare behavior with original",
        "method": "Run same inputs through old and new",
        "acceptable_differences": "Document any intended changes"
    },
    "reuse_validation": {
        "verify_no_duplication": "Check for accidental code duplication",
        "verify_patterns_followed": "Ensure consistent with codebase",
        "verify_dependencies": "No unnecessary new dependencies"
    }
}

def test_reuse_compliance():
    """Verify proper code reuse"""
    # Check for code duplication
    duplicates = find_duplicate_code()
    assert len(duplicates) == 0, f"Found duplicated code: {duplicates}"

    # Verify reused components unchanged
    for component in reused_components:
        assert component.unchanged(), f"{component} was modified!"

    # Check pattern consistency
    patterns = analyze_patterns(new_code)
    assert patterns.match(existing_patterns), "Not following patterns!"
```

---

## PHASE 9: DOCUMENTATION WITH REUSE TRACKING

### 9.1 Documentation Requirements
```markdown
## CODE DOCUMENTATION TEMPLATE

### File: [filename.js]
**Purpose**: [What this file does]
**Reuses**:
- `AuthService` from `/services/auth`
- `validate()` from `/utils/validation`
- Base class `Controller` from `/core`

**New Additions**:
- `customBusinessLogic()` - Specific requirement for feature X

**Pattern Followed**: Repository pattern (see `/repositories/base`)

**Example Usage**:
```javascript
// This component reuses existing authentication
import { AuthService } from '../services/auth';
import { Controller } from '../core';

class NewFeature extends Controller {  // Extending existing base
    constructor() {
        super();
        this.auth = new AuthService();  // Reusing existing service
    }

    // New method specific to this feature
    customBusinessLogic() {
        // Implementation
    }
}
```

**Testing**: See `new_feature.test.js` - reuses test fixtures from `/tests/fixtures`
```

---

## PHASE 10: POST-IMPLEMENTATION REVIEW

### 10.1 Reuse Metrics Report
```markdown
## POST-IMPLEMENTATION REUSE REPORT

### Reuse Statistics:
- **Total Lines of Code**: 500
- **Reused Lines**: 380 (76%)
- **New Lines**: 120 (24%)
- **Components Reused**: 12
- **New Components**: 3

### Reuse Breakdown:
| Component Type | Reused | New | Reuse % |
|---------------|--------|-----|---------|
| Services | 5 | 1 | 83% |
| Utilities | 4 | 0 | 100% |
| Models | 2 | 1 | 67% |
| Tests | 15 | 5 | 75% |

### Time Savings:
- Estimated time if written from scratch: 16 hours
- Actual time with reuse: 4 hours
- **Time saved: 12 hours (75%)**

### Quality Benefits:
- Inherited test coverage from reused components
- Consistent with existing patterns
- Fewer bugs due to proven code reuse
- Easier code review (familiar patterns)

### Recommendations for Future:
1. Component X could be generalized for future reuse
2. Pattern Y worked well, should be documented
3. Consider extracting utility function Z
```

---

## PHASE 11: CONTINUOUS IMPROVEMENT

### 11.1 Reuse Library Building
```python
REUSE_LIBRARY_GROWTH = {
    "identify_candidates": {
        "criteria": [
            "Used in 3+ places",
            "Stable for 3+ months",
            "Well tested",
            "Clear interface"
        ],
        "process": [
            "Extract to shared module",
            "Generalize interface",
            "Document thoroughly",
            "Add comprehensive tests"
        ]
    },
    "maintain_catalog": {
        "location": "/docs/reusable-components.md",
        "format": """
        ## Component Name
        - **Purpose**: What it does
        - **Location**: Where to find it
        - **Usage**: How to use it
        - **Example**: Code example
        - **Tests**: Test location
        """
    },
    "promote_reuse": {
        "actions": [
            "Regular team reviews of reusable components",
            "Reuse metrics in sprint retrospectives",
            "Reward high reuse in code reviews",
            "Maintain reuse leaderboard"
        ]
    }
}
```

---

## CRITICAL REMINDERS & FINAL CHECKLIST

### ⚠️ ABSOLUTE RULES - NEVER VIOLATE
```python
INVIOLABLE_RULES = [
    "NO implementation without explicit approval",
    "ALWAYS search for existing code first (minimum 15 minutes)",
    "NEVER duplicate code that already exists",
    "ALWAYS follow existing patterns unless approved otherwise",
    "DOCUMENT every decision to not reuse existing code",
    "TEST all reused components still work",
    "MEASURE and report reuse metrics"
]
```

### 📋 FINAL CHECKLIST BEFORE ANY TASK

#### Pre-Planning Phase:
- [ ] Searched entire codebase for similar functionality
- [ ] Identified all reusable components
- [ ] Documented existing patterns to follow
- [ ] Listed all utilities and helpers available
- [ ] Checked for relevant tests to reuse

#### Planning Phase:
- [ ] Created detailed implementation plan
- [ ] Included reuse analysis in plan
- [ ] Provided multiple approaches
- [ ] Calculated reuse percentages
- [ ] Estimated time savings from reuse

#### Approval Phase:
- [ ] Plan submitted for approval
- [ ] Questions answered
- [ ] ⏸️ **WAITING FOR EXPLICIT APPROVAL**
- [ ] Approval received and documented
- [ ] Approach confirmed

#### Implementation Phase (POST-APPROVAL ONLY):
- [ ] Following approved plan exactly
- [ ] Reusing all identified components
- [ ] No unauthorized deviations
- [ ] Progress reported regularly
- [ ] Issues escalated immediately

#### Testing Phase:
- [ ] All existing tests still pass
- [ ] Reused components work correctly
- [ ] New functionality tested
- [ ] Integration verified
- [ ] Performance acceptable

#### Documentation Phase:
- [ ] Reuse documented
- [ ] Patterns followed noted
- [ ] Examples provided
- [ ] Metrics calculated
- [ ] Lessons learned recorded

---

## SAMPLE INTERACTION FLOW

```markdown
Claude: I've completed my analysis. Here's my implementation plan:

# IMPLEMENTATION PLAN: Add User Authentication

## Reuse Analysis:
I found we can reuse 75% of existing code:
- `AuthService` - handles JWT tokens (100% reusable)
- `UserValidator` - validation logic (90% reusable, need one new rule)
- `errorHandler` - error handling middleware (100% reusable)

## Proposed Approach:
[Detailed plan with 3 approaches]

**⏸️ AWAITING YOUR APPROVAL TO PROCEED...**

User: Approved - Approach A

Claude: ✅ Approval received! Implementing Approach A with maximum reuse...

[Progress updates every 30 minutes]

Claude: ✅ Implementation complete!
- Reused: 380 lines (76%)
- New code: 120 lines (24%)
- All tests passing
- Time saved: 12 hours
```

---

## END OF PROTOCOL

Remember:
- **PLAN FIRST, GET APPROVAL, THEN IMPLEMENT**
- **REUSE > REBUILD - Always check existing code**
- **No cowboys - Follow the approved plan exactly**
- **Measure everything - Report reuse metrics**
- **Leave it better - Make new code reusable too**

This protocol ensures maximum efficiency, consistency, and quality through systematic reuse and controlled implementation.