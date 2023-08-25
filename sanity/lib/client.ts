import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"sksCS6nVDplQ2AUB0aKySU84idYP71iSmq2yxZtYZI2OnzKwamQKz8NVpGyIKXojyLyre3mjx1Ibs0cayUgQMiXveAHlPsUuUTf25ChbdIM2ppHcjFZbCjoRWEMgfxZQm3phRyLyDyggu9hRfOhBTe97oNAiCXHh5URbRrp8he8qnyF1AQoc"
})
