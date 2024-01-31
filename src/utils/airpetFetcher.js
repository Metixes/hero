import { generateFormdata } from "./generateFormdata";

export const airpetFetch = async (
  route,
  data,
  token,
  conversationId = null
) => {
  try {
    const requestRoute = conversationId
      ? process.env.VUE_APP_AIRPET_MAIN_ROUTE +
        route +
        "/" +
        conversationId +
        "/"
      : process.env.VUE_APP_AIRPET_MAIN_ROUTE + route + "/";

    const request = await fetch(requestRoute, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: generateFormdata(data),
    });

    const response = await request.json();

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
