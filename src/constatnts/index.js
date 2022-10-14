import { AiOutlineDashboard } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { BsFillCartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const headreInfo = [
  { name: "Dashboard", icon: <AiOutlineDashboard /> },

  { name: "Products", icon: <BsFillCartFill /> },
  { name: "Account", icon: <CgProfile /> },
];

export const projectData = {
  accountsPage: {
    Admin: {
      email: "eduardfranz@gmail.com",
      name: "Eduard Franz",
      password: "jvoxidf09234",
      phone: "",
      profilePic:
        "https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg",
    },
    Customer: {
      email: "larathayer@rediffmail.com",
      name: "Lara Thayer",
      password: "238jf9823j",
      phone: "",
      profilePic:
        "https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb",
    },
    Editor: {
      email: "beckygeorge@ymail.com",
      name: "Becky George",
      password: "sdijv02394",
      phone: "",
      profilePic:
        "https://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg",
    },
    Merchant: {
      email: "craigchaney@hotmail.com",
      name: "Craig Chaney",
      password: "wd92jf09wu",
      phone: "",
      profilePic:
        "https://pbs.twimg.com/profile_images/883458234685587456/KtCFjlD4.jpg",
    },
  },
  dasbhoardPage: {
    latestHits: {
      featured: [43, 20, 39, 46, 86, 66, 80],
      latest: [88, 70, 79, 56, 50, 55, 72],
      months: ["January", "February", "March", "April", "May", "June", "July"],
      popular: [32, 47, 38, 21, 55, 75, 70],
    },
    notifications: [
      {
        message:
          "Jessica and 6 others sent you new product updates. Check new orders",
        pic: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg",
        time: "6m",
      },
      {
        message:
          "Oliver Too and 6 others sent you exisiting product updates. Read more reports",
        pic: "https://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg",
        time: "2h",
      },
      {
        message:
          "Victoria and 6 others sent you order updates. Read Order information",
        pic: "https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb",
        time: "1d",
      },
      {
        message:
          "Jessica and 6 others sent you new product updates. Check new orders",
        pic: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg",
        time: "6m",
      },
      {
        message:
          "Oliver Too and 6 others sent you exisiting product updates. Read more reports",
        pic: "https://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg",
        time: "2h",
      },
      {
        message:
          "Victoria and 6 others sent you order updates. Read Order information",
        pic: "https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb",
        time: "1d",
      },
      {
        message:
          "Jessica and 6 others sent you new product updates. Check new orders",
        pic: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg",
        time: "6m",
      },
      {
        message:
          "Oliver Too and 6 others sent you exisiting product updates. Read more reports",
        pic: "https://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg",
        time: "2h",
      },
      {
        message:
          "Victoria and 6 others sent you order updates. Read Order information",
        pic: "https://images.pexels.com/photos/459947/pexels-photo-459947.jpeg?h=350&auto=compress&cs=tinysrgb",
        time: "1d",
      },
    ],
    orders: [
      {
        deliveryDate: "08:00, 18 Nov 2019",
        distance: 485,
        location: "London,UK",
        operators: "Oliver Trag",
        orderNo: 122349,
        startDate: "16:00,12 Nov 2019",
        status: "Moving",
      },
      {
        deliveryDate: "04:00, 14 Nov 2019",
        distance: 360,
        location: "London,UK",
        operators: "Jacob Miller",
        orderNo: 122348,
        startDate: "11:00,10 Nov 2019",
        status: "Pending",
      },
      {
        deliveryDate: "06:00, 28 Nov 2019",
        distance: 340,
        location: "London,UK",
        operators: "George Wilson",
        orderNo: 122347,
        startDate: "12:00,22 Nov 2019",
        status: "Cancelled",
      },
      {
        deliveryDate: "9:00, 14 Nov 2019",
        distance: 218,
        location: "London,UK",
        operators: "William Aung",
        orderNo: 122346,
        startDate: "15:00,10 Nov 2019",
        status: "Moving",
      },
      {
        deliveryDate: "06:00, 17 Nov 2019",
        distance: 280,
        location: "London,UK",
        operators: "Harry Ryan",
        orderNo: 122345,
        startDate: "15:00,11 Nov 2019",
        status: "Pending",
      },
      {
        deliveryDate: "08:00, 18 Nov 2019",
        distance: 218,
        location: "London,UK",
        operators: "Michael Jones",
        orderNo: 122344,
        startDate: "18:00,21 Oct 2019",
        status: "Pending",
      },
      {
        deliveryDate: "10:00, 18 Nov 2019",
        distance: 320,
        location: "London,UK",
        operators: "Oliver Queen",
        orderNo: 122343,
        startDate: "16:00,17 Oct 2019",
        status: "Pending",
      },
      {
        deliveryDate: "08:00, 18 Nov 2019",
        distance: 466,
        location: "London,UK",
        operators: "Jacky Will",
        orderNo: 122342,
        startDate: "14:00,16 Oct 2019",
        status: "Delivered",
      },
      {
        deliveryDate: "05:00, 18 Nov 2019",
        distance: 280,
        location: "London,UK",
        operators: "Thomas Ryan",
        orderNo: 122341,
        startDate: "14:00,16 Oct 2019",
        status: "Delivered",
      },
    ],
    performance: {
      Aqua: 40,
      Blue: 44,
      Green: 28,
      Orange: 38,
      Purple: 58,
      Red: 34,
      Yellow: 48,
    },
    storage: { available: 9.15, system: 6.5, used: 18.24 },
  },
  productsPage: {
    categories: [
      "New Arrival",
      "Latest Fashion",
      "Trending",
      "Christmas Special",
      "New Year Special",
    ],
    products: [
      {
        category: "New Arrival",
        description:
          "Product 1 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "28 March 2019",
        name: "Product 1",
        stock: "550",
        unitSold: "1,450",
      },
      {
        category: "Christmas Special",
        description:
          "Product 2 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "21 March 2019",
        name: "Product 2",
        stock: "750",
        unitSold: "1,200",
      },
      {
        category: "Christmas Special",
        description:
          "Product 3 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "24 February 2019",
        name: "Product 3",
        stock: "650",
        unitSold: "1,000",
      },
      {
        category: "Trending",
        description:
          "Product 4 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "22 February 2019",
        name: "Product 4",
        stock: "400",
        unitSold: "1,400",
      },
      {
        category: "Trending",
        description:
          "Product 5 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "18 February 2019",
        name: "Product 5",
        stock: "350",
        unitSold: "1,800",
      },
      {
        category: "Trending",
        description:
          "Product 6 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 January 2019",
        name: "Product 6",
        stock: "850",
        unitSold: "1,500",
      },
      {
        category: "Latest Fashion",
        description:
          "Product 7 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "15 January 2019",
        name: "Product 7",
        stock: "500",
        unitSold: "1,350",
      },
      {
        category: "New Arrival",
        description:
          "Product 8 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "05 January 2019",
        name: "Product 8",
        stock: "750",
        unitSold: "1,550",
      },
      {
        category: "New Year Special",
        description:
          "Product 9 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 December 2018",
        name: "Product 9",
        stock: "300",
        unitSold: "1,900",
      },
      {
        category: "New Year Special",
        description:
          "Product 10 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 December 2018",
        name: "Product 10",
        stock: "300",
        unitSold: "1,900",
      },
      {
        category: "New Year Special",
        description:
          "Product 11 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 December 2018",
        name: "Product 11",
        stock: "300",
        unitSold: "1,900",
      },
      {
        category: "New Year Special",
        description:
          "Product 12 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 December 2018",
        name: "Product 12",
        stock: "300",
        unitSold: "1,900",
      },
      {
        category: "New Year Special",
        description:
          "Product 13 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 December 2018",
        name: "Product 13",
        stock: "300",
        unitSold: "1,900",
      },
      {
        category: "New Year Special",
        description:
          "Product 14 - Lorem ipsum dolor amet gentrify glossier locavore messenger bag chillwave hashtag irony migas wolf kale chips small batch kogi direct trade shaman.",
        expireDate: "30 December 2018",
        name: "Product 14",
        stock: "300",
        unitSold: "1,900",
      },
    ],
  },
};
