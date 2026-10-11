const test = {
    index: async (req, res) => {

        const data = [
            {
                name: "Jose",
                age: 22,
                address: "Calapan"
            },
            {
                name: "Marie",
                age: 15,
                address: "Bansud"
            },
            {
                name: "Andress",
                age: 12,
                address: "Pinamalayan"
            },
            {
                name: "Manuel",
                age: 23,
                address: "San Teodoro"
            },
            {
                name: "Josie",
                age: 22,
                address: "Naujan"
            }
        ];

        const metrics = {
            totalUsers: 248,
            activeUsers: 182,
            totalRecords: 526,
            pending: 24
        };

        res.render("dashboard", {
            title: "Test Page",
            pageTitle: "Test Activity",
            section: "Activity",
            data: data,
            metrics: metrics
        });
    }
};

export default test;