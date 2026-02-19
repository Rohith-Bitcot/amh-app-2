import { NextRequest, NextResponse } from "next/server";
import { ROUTES_PATH } from "@/utils/constants";
import {
  checkTokenExpired,
  handleTokenExpiration,
} from "./utils/proxy-services";
// import {
//   checkTokenExpired,
//   getRoleConfig,
//   handleTokenExpiration,
//   redirectToLogin,
// } from "./utils/proxy-services";

export default async function proxy(
  request: NextRequest,
): Promise<NextResponse> {
  const PUBLIC_ROUTES = Object.values(ROUTES_PATH);
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("access_token")?.value;

  if (token) {
    const isTokenExpired = checkTokenExpired(token);
    if (isTokenExpired) return handleTokenExpiration(request);

    // const userData = JSON.parse(request?.cookies?.get('user')?.value || '{}');
    // const roleConfig = getRoleConfig(userData?.role?.toLowerCase());

    // if (!roleConfig) {
    //   return redirectToLogin(request);
    // }

    // if (PUBLIC_ROUTES.includes(path)) {
    //   return NextResponse.redirect(new URL(roleConfig.dashboard, request.url));
    // }

    // if (!path.startsWith(roleConfig.prefix)) {
    //   return NextResponse.redirect(new URL(roleConfig.dashboard, request.url));
    // }
  } else if (!PUBLIC_ROUTES.includes(path)) {
    return NextResponse.redirect(new URL(ROUTES_PATH.LOGIN, request.url));
  }

  return NextResponse.next();
}

// Define which paths this middleware should run on
export const config = {
  matcher: ["/"],
};
