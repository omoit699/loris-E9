import {
    FiGrid,
    FiShoppingBag,
    FiHeart,
    FiMapPin,
    FiCreditCard,
    FiUser,
    FiSettings
} from "react-icons/fi";

const customerMenu = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: FiGrid
    },
    {
        label: "My Orders",
        path: "/orders",
        icon: FiShoppingBag
    },
    {
        label: "Wishlist",
        path: "/wishlist",
        icon: FiHeart
    },
    {
        label: "Addresses",
        path: "/addresses",
        icon: FiMapPin
    },
    {
        label: "Payment Methods",
        path: "/payments",
        icon: FiCreditCard
    },
    {
        label: "Profile",
        path: "/profile",
        icon: FiUser
    },
    {
        label: "Settings",
        path: "/settings",
        icon: FiSettings
    }
];

export default customerMenu;