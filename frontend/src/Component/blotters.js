import React from "react";
import style from './Blotter.module.css';

const Blotter = () => {

    const gridSection = () => {
        return (
            <div className={style.gridContainer}>
                <div className={style.gridItem}><p>12:00 LON</p></div>
                <div className={style.gridItem}><p>0 Order(s)</p></div>
                <div className={style.gridItem+" "+style.gridFill}><p>16:00 LON</p></div>
                <div className={style.gridItem}><p>100 Order(s)</p></div>
                <div className={style.gridItem}><p>17:00 LON</p></div>
                <div className={style.gridItem}><p>1 Order(s)</p></div>
                <div className={style.gridItem}><p>1:00 LON</p></div>
                <div className={style.gridItem}><p>1 Order(s)</p></div>
            </div>
        )
    }

    const gridHeading = (name) => {
        return (
            <div className={style.gridHeading}>
                <h3 className={style.heading}>{name}</h3>
            </div>
        )
    }

    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.blotterContainer}>
                    <div className={style.orderSummary}>Orders Summary</div>
                    <div className={style.selection}>
                        <input type='checkbox' id='My' /><label htmlFor='My'>My</label>
                        <input type='checkbox' id='Team' /><label htmlFor='Team'>Team</label>
                        <input type='checkbox' id='All' /><label htmlFor='All'>All</label>
                    </div>
                    {gridHeading("WM")}
                    {gridSection()}
                    {gridHeading("BFIX")}
                    {gridSection()}
                    {gridHeading("Market")}
                    {gridSection()}
                    {gridHeading("Others")}
                    {gridSection()}
                </div>
            </div>
        </>
    )

}

export default Blotter;