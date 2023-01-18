import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { Sequelize } from '../config/db';
import { Inventory } from '../models/inventroy'

const getInventroy = async (req: Request, res: Response, next: NextFunction) => {
    let results
    let id: any
    let name: any
    let price: any
    let priceType: any
    let modifiedTime: any

    try {
        const config = {
            headers: {
                Accept: '*/*',
                Authorization: "Bearer Bearer 48c9d52c-cfd2-33c4-1ffb-bd7e026e0771"
            }
        }
        const url = " https://sandbox.dev.clover.com/v3/merchants/HBVBZZTDA2341/items?expand=tags&expand=categories&expand=taxRates&expand=modifierGroups&expand=itemStock&expand=options&expand=menuItem&orderBy=name%20ASC&limit=26"
        let result = await axios.get(url, config)
        if (result) {
            // console.log(result.data.elements)
            let data = result.data.elements
            console.log(data, '26')
            data.forEach(async (element: any) => {
                console.log(element, 'element')
                const findInvetory = await Inventory.findOne({
                    where: {
                        inventoryId: element.id
                    }
                })
                if (findInvetory) {
                    return res.status(201).json({
                        message:"data already exist"
                    })
                }
                const vale = await Inventory.create({
                    id,
                    inventoryId: element.id,
                    name: element.name,
                    price: element.price
                })
                console.log(vale, 'vale')
                if (vale !== null) {
                    return res.status(200).json({
                        message: "record inserted succesfully",
                        // data:vale
                    })
                }
            });
            return
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "something went wrong"
        })
    }

}

export default {
    getInventroy
}
