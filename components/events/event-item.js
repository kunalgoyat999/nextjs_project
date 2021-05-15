import classes from "./event-item.module.css";
import Link from "next/link";
import Image from "next/image";

function Eventitem(props) {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={810.4} height={473} />
      <div classes={classes.content}>
        <div className={classes.summary}>
          <h1>{title}</h1>
        </div>
        <div className={classes.date}>
          <time>{readableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}> Explore Event </Link>
      </div>
    </li>
  );
}

export default Eventitem;
