import useLoginForm from './use-login-form';

const LoginForm = () => {
  const { form } = useLoginForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="grid gap-2">
        <form.Field name="username">
          {(field) => (
            <>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                type="text"
                placeholder="username: admin"
                required
              />

              {field.state.meta.errors ? (
                <em role="alert">{field.state.meta.errors.join(', ')}</em>
              ) : null}
            </>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              type="password"
              placeholder="password: indonesia!!"
              required
            />
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.isSubmitting, state.errors]}
          children={([isSubmitting, errors]) => (
            <>
              <em className="text-red-500 py-2">{errors}</em>

              <button
                type="submit"
                className="w-full font-bold"
                disabled={Boolean(isSubmitting)}
              >
                {isSubmitting ? 'Submitting...' : 'Login'}
              </button>
            </>
          )}
        />
      </div>
    </form>
  );
};

export default LoginForm;
