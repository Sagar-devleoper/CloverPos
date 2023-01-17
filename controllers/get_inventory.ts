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
            console.log(result.data.elements)
            let data = result.data.elements
            for (const datas of data) {
                const vale = await Inventory.create({
                    id,
                    inventoryId: datas.id,
                    name: datas.name,
                    price: datas.price
                })

                if (vale) {
                    res.status(200).json({
                        message: "record inserted succefully",
                        
                    })
                    return
                }
            }

            return
        }
    } catch (error) {
        res.status(500).json({
            message: "something went wrong"
        })
        console.log(error)
    }

}

export default {
    getInventroy
}
