import { useLogout } from "../../Hooks/AUTH/useLogout.hook";

export function LogoutScreen() {
  const logout = useLogout();

  return <section>{logout}</section>;
}
