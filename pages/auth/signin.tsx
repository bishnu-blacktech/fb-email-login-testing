import { getProviders, signIn } from "next-auth/react";

const SignIN = (providers: any) => {
  return (
    <div>
      <h1>Hello Sign in page</h1>
      {Object.values(providers.providers).map((provider: any) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              // signIn(provider.id, { callbackUrl: "http://localhost:3000/" })
              signIn(provider.id)
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIN;
