import classes from "./NftImages.module.scss";
import { imagesUrl } from "../../redux/slices/imageSlice/imageSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function NftImages() {
  const { images, status, error } = useSelector((store) => store.image);

  const dispatch = useDispatch();
  console.log(images);

  useEffect(() => {
    dispatch(imagesUrl());
  }, [dispatch]);

  return (
    <article className={classes.NftImages}>
      {images.map((img) => {
        console.log(img);
        return (
          <div key={img.id} className={classes.div1}>
            <div className={classes.div2}>
              <img src={img.url} alt="#" />
            </div>
            <button>More inform...</button>
          </div>
        );
      })}
      {status === "pending..." && <h2>Pending...</h2>}
      {error && <h2>An error has occurred: {error}</h2>}
    </article>
  );
}

export default NftImages;
