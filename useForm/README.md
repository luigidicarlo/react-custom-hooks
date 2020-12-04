# useForm hook

## Example

```
const [formState, handleInputChange, reset] = useForm({ name: '', email: '', password: '' });
```

## Params

- <b>initialFormState: Object</b> The initial state for the form. It must include key value pairs, i. e., `{ name: '', email: '' }`.
