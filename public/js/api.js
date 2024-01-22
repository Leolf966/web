const BASE_URL = "http://localhost:5500/api";

        const baseRequest = async ({
            pathUrl = "/plate",
            method = "GET",
            body = null,
        }) => {
            try {
                const reqParams = {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                if (body) {
                    reqParams.body = JSON.stringify(body);
                }

                const response = await fetch(`${BASE_URL}${pathUrl}`, reqParams);

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
                }

                return response;
            } catch (error) {
                console.error(error);
            }
        };



        const getAllPlates = async () => {
            const rawResponse = await baseRequest({ method: "GET" });
            const jsonData = await rawResponse.json();
            return jsonData;
        }

        const getSortedPlate = async () => {
            const rawResponse = await baseRequest({
                pathUrl: `/platesort`,
                method: "GET",
            });
            const jsonData = await rawResponse.json();
            return jsonData;
        }


        const postPlate = (body) => baseRequest({
            method: "POST", body
        });

        const editPlate = (body) => baseRequest({ method: "PUT", body });
        const deletePlate = (id) => baseRequest({ pathUrl: `/plate/${id}`, method: "DELETE" });