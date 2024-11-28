import Challenger from '../components/Hero/Challenger.png';
import Ferrari458 from '../assets/Ferrari_458.png';
import LamborghiniAventador from '../assets/Lamborghini_Aventador.png';
import BmwM3 from '../assets/BMW_M3.png';
import BmwM8Coupe from '../assets/BMW_m8_coupe.png';
import AudiR8 from '../assets/Audi_R8.png';
import FordRanger from '../assets/Ford_Ranger.png';
import ToyotaGT86 from '../assets/Toyota_gt_86.png';
import MazdaRX7 from '../assets/Mazda_RX_7.png';
import CorollaCross from '../assets/corolla_cross.png';
import Toyota_CHR from '../assets/Toyota_C-HR.png';
import ToyotaHighlander from '../assets/Toyota_Highlander.png';
import ToyotaCamry from '../assets/Toyota_Camry.png';

export const carList = [
    {
        id: 1,
        name: 'Dodge Challenger',
        price: 200,
        brand: 'Dodge',
        image: Challenger,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-09-20', endDate: '2024-10-01' },
            { startDate: '2024-11-01', endDate: '2024-11-10' },
            { startDate: '2024-12-15', endDate: '2024-12-28' },
            { startDate: '2025-01-05', endDate: '2025-01-15' },
            { startDate: '2025-02-10', endDate: '2025-02-20' },
            { startDate: '2025-03-10', endDate: '2025-03-18' },
            { startDate: '2025-04-05', endDate: '2025-04-12' },
            { startDate: '2025-06-15', endDate: '2025-06-27' },
            { startDate: '2025-07-10', endDate: '2025-07-18' },
            { startDate: '2025-08-05', endDate: '2025-08-15' },
            { startDate: '2025-09-20', endDate: '2025-09-30' },
            { startDate: '2025-10-15', endDate: '2025-10-28' },
            { startDate: '2025-11-10', endDate: '2025-11-20' },
            { startDate: '2025-12-20', endDate: '2025-12-30' },
            { startDate: '2026-01-02', endDate: '2026-01-06' },
            { startDate: '2026-01-30', endDate: '2026-02-01' },
            { startDate: '2026-02-15', endDate: '2026-02-25' },
            { startDate: '2026-03-25', endDate: '2026-03-30' },
            { startDate: '2026-04-10', endDate: '2026-04-20' },
            { startDate: '2026-05-20', endDate: '2026-05-31' },
            { startDate: '2026-06-24', endDate: '2026-06-30' },
            { startDate: '2026-07-10', endDate: '2026-07-20' },
            { startDate: '2026-08-11', endDate: '2026-08-25' },
            { startDate: '2026-09-16', endDate: '2026-09-30' },
            { startDate: '2026-10-16', endDate: '2026-10-31' },
            { startDate: '2026-11-20', endDate: '2026-11-30' },
            { startDate: '2026-12-21', endDate: '2026-12-31' },
            { startDate: '2027-01-10', endDate: '2027-01-20' },
            { startDate: '2027-02-18', endDate: '2027-02-28' },
            { startDate: '2027-03-15', endDate: '2027-03-25' },
            { startDate: '2027-04-20', endDate: '2027-04-30' },
            { startDate: '2027-05-22', endDate: '2027-06-01' },
            { startDate: '2027-06-15', endDate: '2027-06-25' },
            { startDate: '2027-07-20', endDate: '2027-07-30' },
            { startDate: '2027-08-10', endDate: '2027-08-20' },
            { startDate: '2027-09-25', endDate: '2027-09-30' },
            { startDate: '2027-10-15', endDate: '2027-10-20' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
    {
        id: 2,
        name: 'Ferrari 458',
        price: 800,
        brand: 'Ferrari',
        image: Ferrari458,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-10-02', endDate: '2024-10-15' },
            { startDate: '2024-11-11', endDate: '2024-11-20' },
            { startDate: '2024-12-01', endDate: '2024-12-10' },
            { startDate: '2025-01-20', endDate: '2025-01-30' },
            { startDate: '2025-02-21', endDate: '2025-03-01' },
            { startDate: '2025-03-19', endDate: '2025-03-25' },
            { startDate: '2025-04-15', endDate: '2025-04-30' },
            { startDate: '2025-05-01', endDate: '2025-05-10' },
            { startDate: '2025-06-28', endDate: '2025-07-05' },
            { startDate: '2025-08-16', endDate: '2025-08-30' },
            { startDate: '2025-10-01', endDate: '2025-10-10' },
            { startDate: '2025-11-21', endDate: '2025-12-01' },
            { startDate: '2026-01-07', endDate: '2026-01-15' },
            { startDate: '2026-02-02', endDate: '2026-02-14' },
            { startDate: '2026-03-01', endDate: '2026-03-20' },
            { startDate: '2026-04-02', endDate: '2026-04-08' },
            { startDate: '2026-05-01', endDate: '2026-05-15' },
            { startDate: '2026-06-01', endDate: '2026-06-15' },
            { startDate: '2026-07-01', endDate: '2026-07-08' },
            { startDate: '2026-08-01', endDate: '2026-08-10' },
            { startDate: '2026-09-01', endDate: '2026-09-15' },
            { startDate: '2026-10-01', endDate: '2026-10-15' },
            { startDate: '2026-11-01', endDate: '2026-11-10' },
            { startDate: '2026-12-01', endDate: '2026-12-20' },
            { startDate: '2027-01-01', endDate: '2027-01-09' },
            { startDate: '2027-02-01', endDate: '2027-02-15' },
            { startDate: '2027-03-01', endDate: '2027-03-14' },
            { startDate: '2027-04-01', endDate: '2027-04-19' },
            { startDate: '2027-05-01', endDate: '2027-05-21' },
            { startDate: '2027-06-02', endDate: '2027-06-14' },
            { startDate: '2027-07-01', endDate: '2027-07-19' },
            { startDate: '2027-08-01', endDate: '2027-08-09' },
            { startDate: '2027-09-01', endDate: '2027-09-24' },
            { startDate: '2027-10-01', endDate: '2027-10-14' },
        ],
        type: 'Supercar',
        isPromoted: true,
        expireDate: '2025-12-01T23:59:59',
    },
    {
        id: 3,
        name: 'Lamborghini Aventador',
        price: 630,
        brand: 'Lamborghini',
        image: LamborghiniAventador,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-10-02', endDate: '2024-10-15' },
            { startDate: '2024-11-11', endDate: '2024-11-20' },
            { startDate: '2024-12-01', endDate: '2024-12-10' },
            { startDate: '2025-01-20', endDate: '2025-01-30' },
            { startDate: '2025-02-21', endDate: '2025-03-01' },
            { startDate: '2025-03-19', endDate: '2025-03-25' },
            { startDate: '2025-04-15', endDate: '2025-04-30' },
            { startDate: '2025-05-01', endDate: '2025-05-10' },
            { startDate: '2025-06-28', endDate: '2025-07-05' },
            { startDate: '2025-08-16', endDate: '2025-08-30' },
            { startDate: '2025-10-01', endDate: '2025-10-10' },
            { startDate: '2025-11-21', endDate: '2025-12-01' },
            { startDate: '2026-01-07', endDate: '2026-01-15' },
            { startDate: '2026-02-02', endDate: '2026-02-14' },
            { startDate: '2026-03-01', endDate: '2026-03-20' },
            { startDate: '2026-04-02', endDate: '2026-04-08' },
            { startDate: '2026-05-01', endDate: '2026-05-15' },
            { startDate: '2026-06-01', endDate: '2026-06-15' },
            { startDate: '2026-07-01', endDate: '2026-07-08' },
            { startDate: '2026-08-01', endDate: '2026-08-10' },
            { startDate: '2026-09-01', endDate: '2026-09-15' },
            { startDate: '2026-10-01', endDate: '2026-10-15' },
            { startDate: '2026-11-01', endDate: '2026-11-10' },
            { startDate: '2026-12-01', endDate: '2026-12-20' },
            { startDate: '2027-01-01', endDate: '2027-01-09' },
            { startDate: '2027-02-01', endDate: '2027-02-15' },
            { startDate: '2027-03-01', endDate: '2027-03-14' },
            { startDate: '2027-04-01', endDate: '2027-04-19' },
            { startDate: '2027-05-01', endDate: '2027-05-21' },
            { startDate: '2027-06-02', endDate: '2027-06-14' },
            { startDate: '2027-07-01', endDate: '2027-07-19' },
            { startDate: '2027-08-01', endDate: '2027-08-09' },
            { startDate: '2027-09-01', endDate: '2027-09-24' },
            { startDate: '2027-10-01', endDate: '2027-10-14' },
        ],
        type: 'Supercar',
        isPromoted: true,
        expireDate: '2025-05-01T23:59:59',
    },
    
    {
        id: 4,
        name: 'BMW M3 Competition',
        price: 180,
        brand: 'BMW',
        image: BmwM3,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: false,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-09-20', endDate: '2024-10-01' },
            { startDate: '2024-11-01', endDate: '2024-11-10' },
            { startDate: '2024-12-15', endDate: '2024-12-28' },
            { startDate: '2025-01-05', endDate: '2025-01-15' },
            { startDate: '2025-02-10', endDate: '2025-02-20' },
            { startDate: '2025-03-10', endDate: '2025-03-18' },
            { startDate: '2025-04-05', endDate: '2025-04-12' },
            { startDate: '2025-06-15', endDate: '2025-06-27' },
            { startDate: '2025-07-10', endDate: '2025-07-18' },
            { startDate: '2025-08-05', endDate: '2025-08-15' },
            { startDate: '2025-09-20', endDate: '2025-09-30' },
            { startDate: '2025-10-15', endDate: '2025-10-28' },
            { startDate: '2025-11-10', endDate: '2025-11-20' },
            { startDate: '2025-12-20', endDate: '2025-12-30' },
            { startDate: '2026-01-02', endDate: '2026-01-06' },
            { startDate: '2026-01-30', endDate: '2026-02-01' },
            { startDate: '2026-02-15', endDate: '2026-02-25' },
            { startDate: '2026-03-25', endDate: '2026-03-30' },
            { startDate: '2026-04-10', endDate: '2026-04-20' },
            { startDate: '2026-05-20', endDate: '2026-05-31' },
            { startDate: '2026-06-24', endDate: '2026-06-30' },
            { startDate: '2026-07-10', endDate: '2026-07-20' },
            { startDate: '2026-08-11', endDate: '2026-08-25' },
            { startDate: '2026-09-16', endDate: '2026-09-30' },
            { startDate: '2026-10-16', endDate: '2026-10-31' },
            { startDate: '2026-11-20', endDate: '2026-11-30' },
            { startDate: '2026-12-21', endDate: '2026-12-31' },
            { startDate: '2027-01-10', endDate: '2027-01-20' },
            { startDate: '2027-02-18', endDate: '2027-02-28' },
            { startDate: '2027-03-15', endDate: '2027-03-25' },
            { startDate: '2027-04-20', endDate: '2027-04-30' },
            { startDate: '2027-05-22', endDate: '2027-06-01' },
            { startDate: '2027-06-15', endDate: '2027-06-25' },
            { startDate: '2027-07-20', endDate: '2027-07-30' },
            { startDate: '2027-08-10', endDate: '2027-08-20' },
            { startDate: '2027-09-25', endDate: '2027-09-30' },
            { startDate: '2027-10-15', endDate: '2027-10-20' },
        ],
        type: 'Supercar',
        isPromoted: true,
        expireDate: '2025-10-01T23:59:59',
    },
    {
        id: 5,
        name: 'BMW M8 Coupe',
        price: 460,
        brand: 'BMW',
        image: BmwM8Coupe,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: false,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-10-02', endDate: '2024-10-15' },
            { startDate: '2024-11-11', endDate: '2024-11-20' },
            { startDate: '2024-12-01', endDate: '2024-12-10' },
            { startDate: '2025-01-20', endDate: '2025-01-30' },
            { startDate: '2025-02-21', endDate: '2025-03-01' },
            { startDate: '2025-03-19', endDate: '2025-03-25' },
            { startDate: '2025-04-15', endDate: '2025-04-30' },
            { startDate: '2025-05-01', endDate: '2025-05-10' },
            { startDate: '2025-06-28', endDate: '2025-07-05' },
            { startDate: '2025-08-16', endDate: '2025-08-30' },
            { startDate: '2025-10-01', endDate: '2025-10-10' },
            { startDate: '2025-11-21', endDate: '2025-12-01' },
            { startDate: '2026-01-07', endDate: '2026-01-15' },
            { startDate: '2026-02-02', endDate: '2026-02-14' },
            { startDate: '2026-03-01', endDate: '2026-03-20' },
            { startDate: '2026-04-02', endDate: '2026-04-08' },
            { startDate: '2026-05-01', endDate: '2026-05-15' },
            { startDate: '2026-06-01', endDate: '2026-06-15' },
            { startDate: '2026-07-01', endDate: '2026-07-08' },
            { startDate: '2026-08-01', endDate: '2026-08-10' },
            { startDate: '2026-09-01', endDate: '2026-09-15' },
            { startDate: '2026-10-01', endDate: '2026-10-15' },
            { startDate: '2026-11-01', endDate: '2026-11-10' },
            { startDate: '2026-12-01', endDate: '2026-12-20' },
            { startDate: '2027-01-01', endDate: '2027-01-09' },
            { startDate: '2027-02-01', endDate: '2027-02-15' },
            { startDate: '2027-03-01', endDate: '2027-03-14' },
            { startDate: '2027-04-01', endDate: '2027-04-19' },
            { startDate: '2027-05-01', endDate: '2027-05-21' },
            { startDate: '2027-06-02', endDate: '2027-06-14' },
            { startDate: '2027-07-01', endDate: '2027-07-19' },
            { startDate: '2027-08-01', endDate: '2027-08-09' },
            { startDate: '2027-09-01', endDate: '2027-09-24' },
            { startDate: '2027-10-01', endDate: '2027-10-14' },
        ],
        type: 'Supercar',
        isPromoted: true,
        expireDate: '2025-12-01T23:59:59',
    },
    {
        id: 6,
        name: 'Audi R8',
        price: 310,
        brand: 'Audi',
        image: AudiR8,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-09-20', endDate: '2024-10-01' },
            { startDate: '2024-11-01', endDate: '2024-11-10' },
            { startDate: '2024-12-15', endDate: '2024-12-28' },
            { startDate: '2025-01-05', endDate: '2025-01-15' },
            { startDate: '2025-02-10', endDate: '2025-02-20' },
            { startDate: '2025-03-10', endDate: '2025-03-18' },
            { startDate: '2025-04-05', endDate: '2025-04-12' },
            { startDate: '2025-06-15', endDate: '2025-06-27' },
            { startDate: '2025-07-10', endDate: '2025-07-18' },
            { startDate: '2025-08-05', endDate: '2025-08-15' },
            { startDate: '2025-09-20', endDate: '2025-09-30' },
            { startDate: '2025-10-15', endDate: '2025-10-28' },
            { startDate: '2025-11-10', endDate: '2025-11-20' },
            { startDate: '2025-12-20', endDate: '2025-12-30' },
            { startDate: '2026-01-02', endDate: '2026-01-06' },
            { startDate: '2026-01-30', endDate: '2026-02-01' },
            { startDate: '2026-02-15', endDate: '2026-02-25' },
            { startDate: '2026-03-25', endDate: '2026-03-30' },
            { startDate: '2026-04-10', endDate: '2026-04-20' },
            { startDate: '2026-05-20', endDate: '2026-05-31' },
            { startDate: '2026-06-24', endDate: '2026-06-30' },
            { startDate: '2026-07-10', endDate: '2026-07-20' },
            { startDate: '2026-08-11', endDate: '2026-08-25' },
            { startDate: '2026-09-16', endDate: '2026-09-30' },
            { startDate: '2026-10-16', endDate: '2026-10-31' },
            { startDate: '2026-11-20', endDate: '2026-11-30' },
            { startDate: '2026-12-21', endDate: '2026-12-31' },
            { startDate: '2027-01-10', endDate: '2027-01-20' },
            { startDate: '2027-02-18', endDate: '2027-02-28' },
            { startDate: '2027-03-15', endDate: '2027-03-25' },
            { startDate: '2027-04-20', endDate: '2027-04-30' },
            { startDate: '2027-05-22', endDate: '2027-06-01' },
            { startDate: '2027-06-15', endDate: '2027-06-25' },
            { startDate: '2027-07-20', endDate: '2027-07-30' },
            { startDate: '2027-08-10', endDate: '2027-08-20' },
            { startDate: '2027-09-25', endDate: '2027-09-30' },
            { startDate: '2027-10-15', endDate: '2027-10-20' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
    {
        id: 7,
        name: 'Ford Ranger',
        price: 90,
        brand: 'Ford',
        image: FordRanger,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-10-02', endDate: '2024-10-15' },
            { startDate: '2024-11-11', endDate: '2024-11-20' },
            { startDate: '2024-12-01', endDate: '2024-12-10' },
            { startDate: '2025-01-20', endDate: '2025-01-30' },
            { startDate: '2025-02-21', endDate: '2025-03-01' },
            { startDate: '2025-03-19', endDate: '2025-03-25' },
            { startDate: '2025-04-15', endDate: '2025-04-30' },
            { startDate: '2025-05-01', endDate: '2025-05-10' },
            { startDate: '2025-06-28', endDate: '2025-07-05' },
            { startDate: '2025-08-16', endDate: '2025-08-30' },
            { startDate: '2025-10-01', endDate: '2025-10-10' },
            { startDate: '2025-11-21', endDate: '2025-12-01' },
            { startDate: '2026-01-07', endDate: '2026-01-15' },
            { startDate: '2026-02-02', endDate: '2026-02-14' },
            { startDate: '2026-03-01', endDate: '2026-03-20' },
            { startDate: '2026-04-02', endDate: '2026-04-08' },
            { startDate: '2026-05-01', endDate: '2026-05-15' },
            { startDate: '2026-06-01', endDate: '2026-06-15' },
            { startDate: '2026-07-01', endDate: '2026-07-08' },
            { startDate: '2026-08-01', endDate: '2026-08-10' },
            { startDate: '2026-09-01', endDate: '2026-09-15' },
            { startDate: '2026-10-01', endDate: '2026-10-15' },
            { startDate: '2026-11-01', endDate: '2026-11-10' },
            { startDate: '2026-12-01', endDate: '2026-12-20' },
            { startDate: '2027-01-01', endDate: '2027-01-09' },
            { startDate: '2027-02-01', endDate: '2027-02-15' },
            { startDate: '2027-03-01', endDate: '2027-03-14' },
            { startDate: '2027-04-01', endDate: '2027-04-19' },
            { startDate: '2027-05-01', endDate: '2027-05-21' },
            { startDate: '2027-06-02', endDate: '2027-06-14' },
            { startDate: '2027-07-01', endDate: '2027-07-19' },
            { startDate: '2027-08-01', endDate: '2027-08-09' },
            { startDate: '2027-09-01', endDate: '2027-09-24' },
            { startDate: '2027-10-01', endDate: '2027-10-14' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
    {
        id: 8,
        name: 'Toyota GT86',
        price: 120,
        brand: 'Toyota',
        image: ToyotaGT86,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-10-02', endDate: '2024-10-15' },
            { startDate: '2024-11-11', endDate: '2024-11-20' },
            { startDate: '2024-12-01', endDate: '2024-12-10' },
            { startDate: '2025-01-20', endDate: '2025-01-30' },
            { startDate: '2025-02-21', endDate: '2025-03-01' },
            { startDate: '2025-03-19', endDate: '2025-03-25' },
            { startDate: '2025-04-15', endDate: '2025-04-30' },
            { startDate: '2025-05-01', endDate: '2025-05-10' },
            { startDate: '2025-06-28', endDate: '2025-07-05' },
            { startDate: '2025-08-16', endDate: '2025-08-30' },
            { startDate: '2025-10-01', endDate: '2025-10-10' },
            { startDate: '2025-11-21', endDate: '2025-12-01' },
            { startDate: '2026-01-07', endDate: '2026-01-15' },
            { startDate: '2026-02-02', endDate: '2026-02-14' },
            { startDate: '2026-03-01', endDate: '2026-03-20' },
            { startDate: '2026-04-02', endDate: '2026-04-08' },
            { startDate: '2026-05-01', endDate: '2026-05-15' },
            { startDate: '2026-06-01', endDate: '2026-06-15' },
            { startDate: '2026-07-01', endDate: '2026-07-08' },
            { startDate: '2026-08-01', endDate: '2026-08-10' },
            { startDate: '2026-09-01', endDate: '2026-09-15' },
            { startDate: '2026-10-01', endDate: '2026-10-15' },
            { startDate: '2026-11-01', endDate: '2026-11-10' },
            { startDate: '2026-12-01', endDate: '2026-12-20' },
            { startDate: '2027-01-01', endDate: '2027-01-09' },
            { startDate: '2027-02-01', endDate: '2027-02-15' },
            { startDate: '2027-03-01', endDate: '2027-03-14' },
            { startDate: '2027-04-01', endDate: '2027-04-19' },
            { startDate: '2027-05-01', endDate: '2027-05-21' },
            { startDate: '2027-06-02', endDate: '2027-06-14' },
            { startDate: '2027-07-01', endDate: '2027-07-19' },
            { startDate: '2027-08-01', endDate: '2027-08-09' },
            { startDate: '2027-09-01', endDate: '2027-09-24' },
            { startDate: '2027-10-01', endDate: '2027-10-14' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
    {
        id: 9,
        name: 'Mazda RX7',
        price: 110,
        brand: 'Mazda',
        image: MazdaRX7,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: false,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-09-20', endDate: '2024-10-01' },
            { startDate: '2024-11-01', endDate: '2024-11-10' },
            { startDate: '2024-12-15', endDate: '2024-12-28' },
            { startDate: '2025-01-05', endDate: '2025-01-15' },
            { startDate: '2025-02-10', endDate: '2025-02-20' },
            { startDate: '2025-03-10', endDate: '2025-03-18' },
            { startDate: '2025-04-05', endDate: '2025-04-12' },
            { startDate: '2025-06-15', endDate: '2025-06-27' },
            { startDate: '2025-07-10', endDate: '2025-07-18' },
            { startDate: '2025-08-05', endDate: '2025-08-15' },
            { startDate: '2025-09-20', endDate: '2025-09-30' },
            { startDate: '2025-10-15', endDate: '2025-10-28' },
            { startDate: '2025-11-10', endDate: '2025-11-20' },
            { startDate: '2025-12-20', endDate: '2025-12-30' },
            { startDate: '2026-01-02', endDate: '2026-01-06' },
            { startDate: '2026-01-30', endDate: '2026-02-01' },
            { startDate: '2026-02-15', endDate: '2026-02-25' },
            { startDate: '2026-03-25', endDate: '2026-03-30' },
            { startDate: '2026-04-10', endDate: '2026-04-20' },
            { startDate: '2026-05-20', endDate: '2026-05-31' },
            { startDate: '2026-06-24', endDate: '2026-06-30' },
            { startDate: '2026-07-10', endDate: '2026-07-20' },
            { startDate: '2026-08-11', endDate: '2026-08-25' },
            { startDate: '2026-09-16', endDate: '2026-09-30' },
            { startDate: '2026-10-16', endDate: '2026-10-31' },
            { startDate: '2026-11-20', endDate: '2026-11-30' },
            { startDate: '2026-12-21', endDate: '2026-12-31' },
            { startDate: '2027-01-10', endDate: '2027-01-20' },
            { startDate: '2027-02-18', endDate: '2027-02-28' },
            { startDate: '2027-03-15', endDate: '2027-03-25' },
            { startDate: '2027-04-20', endDate: '2027-04-30' },
            { startDate: '2027-05-22', endDate: '2027-06-01' },
            { startDate: '2027-06-15', endDate: '2027-06-25' },
            { startDate: '2027-07-20', endDate: '2027-07-30' },
            { startDate: '2027-08-10', endDate: '2027-08-20' },
            { startDate: '2027-09-25', endDate: '2027-09-30' },
            { startDate: '2027-10-15', endDate: '2027-10-20' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
    {
        id: 10,
        name: 'Toyota Corolla Cross',
        price: 70,
        brand: 'Toyota',
        image: CorollaCross,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-10-02', endDate: '2024-10-15' },
            { startDate: '2024-11-11', endDate: '2024-11-20' },
            { startDate: '2024-12-01', endDate: '2024-12-10' },
            { startDate: '2025-01-20', endDate: '2025-01-30' },
            { startDate: '2025-02-21', endDate: '2025-03-01' },
            { startDate: '2025-03-19', endDate: '2025-03-25' },
            { startDate: '2025-04-15', endDate: '2025-04-30' },
            { startDate: '2025-05-01', endDate: '2025-05-10' },
            { startDate: '2025-06-28', endDate: '2025-07-05' },
            { startDate: '2025-08-16', endDate: '2025-08-30' },
            { startDate: '2025-10-01', endDate: '2025-10-10' },
            { startDate: '2025-11-21', endDate: '2025-12-01' },
            { startDate: '2026-01-07', endDate: '2026-01-15' },
            { startDate: '2026-02-02', endDate: '2026-02-14' },
            { startDate: '2026-03-01', endDate: '2026-03-20' },
            { startDate: '2026-04-02', endDate: '2026-04-08' },
            { startDate: '2026-05-01', endDate: '2026-05-15' },
            { startDate: '2026-06-01', endDate: '2026-06-15' },
            { startDate: '2026-07-01', endDate: '2026-07-08' },
            { startDate: '2026-08-01', endDate: '2026-08-10' },
            { startDate: '2026-09-01', endDate: '2026-09-15' },
            { startDate: '2026-10-01', endDate: '2026-10-15' },
            { startDate: '2026-11-01', endDate: '2026-11-10' },
            { startDate: '2026-12-01', endDate: '2026-12-20' },
            { startDate: '2027-01-01', endDate: '2027-01-09' },
            { startDate: '2027-02-01', endDate: '2027-02-15' },
            { startDate: '2027-03-01', endDate: '2027-03-14' },
            { startDate: '2027-04-01', endDate: '2027-04-19' },
            { startDate: '2027-05-01', endDate: '2027-05-21' },
            { startDate: '2027-06-02', endDate: '2027-06-14' },
            { startDate: '2027-07-01', endDate: '2027-07-19' },
            { startDate: '2027-08-01', endDate: '2027-08-09' },
            { startDate: '2027-09-01', endDate: '2027-09-24' },
            { startDate: '2027-10-01', endDate: '2027-10-14' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
    {
        id: 11,
        name: 'Toyota C-HR',
        price: 85,
        brand: 'Toyota',
        image: Toyota_CHR,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-09-20', endDate: '2024-10-01' },
            { startDate: '2024-11-01', endDate: '2024-11-10' },
            { startDate: '2024-12-15', endDate: '2024-12-28' },
            { startDate: '2025-01-05', endDate: '2025-01-15' },
            { startDate: '2025-02-10', endDate: '2025-02-20' },
            { startDate: '2025-03-10', endDate: '2025-03-18' },
            { startDate: '2025-04-05', endDate: '2025-04-12' },
            { startDate: '2025-06-15', endDate: '2025-06-27' },
            { startDate: '2025-07-10', endDate: '2025-07-18' },
            { startDate: '2025-08-05', endDate: '2025-08-15' },
            { startDate: '2025-09-20', endDate: '2025-09-30' },
            { startDate: '2025-10-15', endDate: '2025-10-28' },
            { startDate: '2025-11-10', endDate: '2025-11-20' },
            { startDate: '2025-12-20', endDate: '2025-12-30' },
            { startDate: '2026-01-02', endDate: '2026-01-06' },
            { startDate: '2026-01-30', endDate: '2026-02-01' },
            { startDate: '2026-02-15', endDate: '2026-02-25' },
            { startDate: '2026-03-25', endDate: '2026-03-30' },
            { startDate: '2026-04-10', endDate: '2026-04-20' },
            { startDate: '2026-05-20', endDate: '2026-05-31' },
            { startDate: '2026-06-24', endDate: '2026-06-30' },
            { startDate: '2026-07-10', endDate: '2026-07-20' },
            { startDate: '2026-08-11', endDate: '2026-08-25' },
            { startDate: '2026-09-16', endDate: '2026-09-30' },
            { startDate: '2026-10-16', endDate: '2026-10-31' },
            { startDate: '2026-11-20', endDate: '2026-11-30' },
            { startDate: '2026-12-21', endDate: '2026-12-31' },
            { startDate: '2027-01-10', endDate: '2027-01-20' },
            { startDate: '2027-02-18', endDate: '2027-02-28' },
            { startDate: '2027-03-15', endDate: '2027-03-25' },
            { startDate: '2027-04-20', endDate: '2027-04-30' },
            { startDate: '2027-05-22', endDate: '2027-06-01' },
            { startDate: '2027-06-15', endDate: '2027-06-25' },
            { startDate: '2027-07-20', endDate: '2027-07-30' },
            { startDate: '2027-08-10', endDate: '2027-08-20' },
            { startDate: '2027-09-25', endDate: '2027-09-30' },
            { startDate: '2027-10-15', endDate: '2027-10-20' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
    {
        id: 12,
        name: 'Toyota Highlander',
        price: 70,
        brand: 'Toyota',
        image: ToyotaHighlander,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: false,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-10-02', endDate: '2024-10-15' },
            { startDate: '2024-11-11', endDate: '2024-11-20' },
            { startDate: '2024-12-01', endDate: '2024-12-10' },
            { startDate: '2025-01-20', endDate: '2025-01-30' },
            { startDate: '2025-02-21', endDate: '2025-03-01' },
            { startDate: '2025-03-19', endDate: '2025-03-25' },
            { startDate: '2025-04-15', endDate: '2025-04-30' },
            { startDate: '2025-05-01', endDate: '2025-05-10' },
            { startDate: '2025-06-28', endDate: '2025-07-05' },
            { startDate: '2025-08-16', endDate: '2025-08-30' },
            { startDate: '2025-10-01', endDate: '2025-10-10' },
            { startDate: '2025-11-21', endDate: '2025-12-01' },
            { startDate: '2026-01-07', endDate: '2026-01-15' },
            { startDate: '2026-02-02', endDate: '2026-02-14' },
            { startDate: '2026-03-01', endDate: '2026-03-20' },
            { startDate: '2026-04-02', endDate: '2026-04-08' },
            { startDate: '2026-05-01', endDate: '2026-05-15' },
            { startDate: '2026-06-01', endDate: '2026-06-15' },
            { startDate: '2026-07-01', endDate: '2026-07-08' },
            { startDate: '2026-08-01', endDate: '2026-08-10' },
            { startDate: '2026-09-01', endDate: '2026-09-15' },
            { startDate: '2026-10-01', endDate: '2026-10-15' },
            { startDate: '2026-11-01', endDate: '2026-11-10' },
            { startDate: '2026-12-01', endDate: '2026-12-20' },
            { startDate: '2027-01-01', endDate: '2027-01-09' },
            { startDate: '2027-02-01', endDate: '2027-02-15' },
            { startDate: '2027-03-01', endDate: '2027-03-14' },
            { startDate: '2027-04-01', endDate: '2027-04-19' },
            { startDate: '2027-05-01', endDate: '2027-05-21' },
            { startDate: '2027-06-02', endDate: '2027-06-14' },
            { startDate: '2027-07-01', endDate: '2027-07-19' },
            { startDate: '2027-08-01', endDate: '2027-08-09' },
            { startDate: '2027-09-01', endDate: '2027-09-24' },
            { startDate: '2027-10-01', endDate: '2027-10-14' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
    {
        id: 13,
        name: 'Toyota Camry',
        price: 50,
        brand: 'Toyota',
        image: ToyotaCamry,
        horsePower: '500',
        transmission: 'Automatic',
        acceleration: '3.5s',
        tank: '70L',
        available: true,
        description: 'The Ferrari 812 Superfast is a front mid-engine, rear-wheel-drive grand tourer produced by Italian sports car manufacturer Ferrari that made its debut at the 2017 Geneva Motor Show. The 812 Superfast is the successor to the F12berlinetta.',
        reservedDates: [
            { startDate: '2024-10-02', endDate: '2024-10-15' },
            { startDate: '2024-11-11', endDate: '2024-11-20' },
            { startDate: '2024-12-01', endDate: '2024-12-10' },
            { startDate: '2025-01-20', endDate: '2025-01-30' },
            { startDate: '2025-02-21', endDate: '2025-03-01' },
            { startDate: '2025-03-19', endDate: '2025-03-25' },
            { startDate: '2025-04-15', endDate: '2025-04-30' },
            { startDate: '2025-05-01', endDate: '2025-05-10' },
            { startDate: '2025-06-28', endDate: '2025-07-05' },
            { startDate: '2025-08-16', endDate: '2025-08-30' },
            { startDate: '2025-10-01', endDate: '2025-10-10' },
            { startDate: '2025-11-21', endDate: '2025-12-01' },
            { startDate: '2026-01-07', endDate: '2026-01-15' },
            { startDate: '2026-02-02', endDate: '2026-02-14' },
            { startDate: '2026-03-01', endDate: '2026-03-20' },
            { startDate: '2026-04-02', endDate: '2026-04-08' },
            { startDate: '2026-05-01', endDate: '2026-05-15' },
            { startDate: '2026-06-01', endDate: '2026-06-15' },
            { startDate: '2026-07-01', endDate: '2026-07-08' },
            { startDate: '2026-08-01', endDate: '2026-08-10' },
            { startDate: '2026-09-01', endDate: '2026-09-15' },
            { startDate: '2026-10-01', endDate: '2026-10-15' },
            { startDate: '2026-11-01', endDate: '2026-11-10' },
            { startDate: '2026-12-01', endDate: '2026-12-20' },
            { startDate: '2027-01-01', endDate: '2027-01-09' },
            { startDate: '2027-02-01', endDate: '2027-02-15' },
            { startDate: '2027-03-01', endDate: '2027-03-14' },
            { startDate: '2027-04-01', endDate: '2027-04-19' },
            { startDate: '2027-05-01', endDate: '2027-05-21' },
            { startDate: '2027-06-02', endDate: '2027-06-14' },
            { startDate: '2027-07-01', endDate: '2027-07-19' },
            { startDate: '2027-08-01', endDate: '2027-08-09' },
            { startDate: '2027-09-01', endDate: '2027-09-24' },
            { startDate: '2027-10-01', endDate: '2027-10-14' },
        ],
        type: 'Supercar',
        isPromoted: false,
    },
]