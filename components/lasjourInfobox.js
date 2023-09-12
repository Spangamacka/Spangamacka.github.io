import classes from './lasjourInfobox.module.css';
import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';
import lasjourlogo from 'public/logo/Låsjourblack.svg';

function LasjourInfobox() {
    return (
        <div className={classes.container}>
                <div className={classes.jourinfo}>
                    <span className={classes.title}>Vår Låsjour</span>
                    <span className={classes.number}>08-121 541 88</span>
                </div>
                <div className={classes.lasjourLogo}>
                    <ExportedImage
                    placeholder="empty"
                    unoptimized={true}
                    src={lasjourlogo}
                    width={80}
                    height={100}
                    alt="LåsjourStockholm.logo"
                    />
                </div>
        </div>
    )
}

export default LasjourInfobox;