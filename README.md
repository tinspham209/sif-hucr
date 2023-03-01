# SIF HUCR

## Techstack

| #   | Name                          | Version | Note                                      |
| --- | :---------------------------- | :------ | :---------------------------------------- |
| 1   | React                         | 18.2.0  |                                           |
| 2   | TypeScript                    |         |                                           |
| 3   | SCSS                          |         |                                           |
| 4   | Material UI v5                | 5.11.9  | UI Component                              |
| 5   | AWS Amplify, Cognito, Duo MFA |         | Authentication / Authorization / MFA      |
| 6   | redux                         | 4.2.0   | Global State Management                   |
| 7   | redux-toolkit                 | 1.8.5   |                                           |
| 8   | react-query                   | ^3.39.2 | Fetch, cache and update data              |
| 9   | Formik                        | ^2.2.6  | Form management                           |
| 10  | Yup                           | 0.32.11 | Form validation                           |
| 11  | mui-datatables                | 4.2.2   | Table UI Component                        |
| 12  | react-select                  | 5.7.0   |                                           |
| 13  | react-datepicker              | 3.8.0   |                                           |
| 14  | react-input-mask              | ^2.0.4  |                                           |
| 15  | react-phone-number-input      | 3.2.13  |                                           |
| 16  | react-dropzone                | 14.2.3  | Drag to import file                       |
| 17  | react-toastify                | 9.1.1   | Toast msg                                 |
| 18  | detect-secrets                | 1.1.4   | preventing secrets key before push commit |

## Commit Message Format:

```
<type>(<scope>): <task name> | <short summary>
  │       │         │              │
  │       │         │              └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │         │
  │       │         └─⫸ Task name was assign for this commit
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve|global|*
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `<task_name>` and `<scope>` field is optional.

### Commit Message Example

- `feat(check-in table): HDOAAQRP-672/Add to queue function`
- `style(pre check-in form): HDOAAQRP-645/update style Skeleton`
- `fix(check-in table): close toast when click on snackbar`
- `refactor(check-in table): Optimized component re-render`
- `ci: update buildspec -fix slack notification`

Or install extension: [Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor)

### Authentication Flow

- Open file `./assets/authentication-flow.png`
