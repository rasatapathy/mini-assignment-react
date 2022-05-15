const cars = [
    {
        id: "1",
        name: "Renault ZOE ZE50 R135 GT line(Rapid)",
        img_url: "https://imgd.aeplcdn.com/0x0/n/cw/ec/46994/jaguar-f-type-right-front-three-quarter18.jpeg",
        efficiency: "19",
        emi_per_month: "450",
        available_from: "",
        charging: "50kW",
        range: "",
        min_subscription_length: ["1month", "6months", "9months"],
        miles_per_month: [800, 1000, 1200, 1500],
        delivery_date: "",
        seat_count: 5,
        door_count: 5,
        engine_location: "front",
        color: "Titanium Grey",
        max_speed: "",
        max_charging_speed: ""

    },
    {
        id: "2",
        name: "BMW",
        img_url: "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
        efficiency: "19",
        emi_per_month: "450",
        available_from: "",
        charging: "50kW",
        range: "",
        min_subscription_length: ["1month", "6months", "9months"],
        miles_per_month: [800, 1000, 1200, 1500],
        delivery_date: "",
        seat_count: 5,
        door_count: 5,
        engine_location: "front",
        color: "Titanium Grey",
        max_speed: "",
        max_charging_speed: ""

    },
    {
        id: "3",
        name: "BMW",
        img_url: "https://imgd.aeplcdn.com/0x0/n/cw/ec/108971/mc20-exterior-right-front-three-quarter.jpeg",
        efficiency: "19",
        emi_per_month: "450",
        available_from: "",
        charging: "50kW",
        range: "",
        min_subscription_length: ["1month", "6months", "9months"],
        miles_per_month: [800, 1000, 1200, 1500],
        delivery_date: "",
        seat_count: 5,
        door_count: 5,
        engine_location: "front",
        color: "Titanium Grey",
        max_speed: "",
        max_charging_speed: ""


    },
    {
        id: "4",
        name: "BMW",
        img_url: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Volvo-S60-130220211541.jpg",
        efficiency: "19",
        emi_per_month: "450",
        available_from: "",
        charging: "50kW",
        range: "",
        min_subscription_length: ["1month", "6months", "9months"],
        miles_per_month: [800, 1000, 1200, 1500],
        delivery_date: "",
        seat_count: 5,
        door_count: 5,
        engine_location: "front",
        color: "Titanium Grey",
        max_speed: "",
        max_charging_speed: ""


    },
    {
        id: "5",
        name: "BMW",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKJ2sRG58F7v7OrnpLxIXqY1BCWV6rmSfPA&usqp=CAU",
        efficiency: "19",
        emi_per_month: "450",
        available_from: "",
        charging: "50kW",
        range: "",
        min_subscription_length: ["1month", "6months", "9months"],
        miles_per_month: [800, 1000, 1200, 1500],
        delivery_date: "",
        seat_count: 5,
        door_count: 5,
        engine_location: "front",
        color: "Titanium Grey",
        max_speed: "",
        max_charging_speed: ""


    }
]

export function getCars(){
    return cars;
}

export function getCar(id){
    return cars.find((car)=> car.id === id);

}
