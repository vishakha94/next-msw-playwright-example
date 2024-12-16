import https from "https";

export function getData<T>(path: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "dummyjson.com",
      path,
      method: "GET",
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData as T);
        } catch (e) {
          reject(new Error("Failed to parse response data"));
        }
      });
    });

    req.on("error", (error) => {
      reject(new Error(`Failed to fetch recipes: ${error.message}`));
    });

    req.end();
  });
}
