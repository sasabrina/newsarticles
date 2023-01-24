import Link from "next/link";
import styles from "./button.module.scss";

type Props = {
  type: "loadMore" | "link";
  text: string;
  link?: string;
  onclick?: VoidFunction;
};

const Button = ({ type, text, onclick, link }: Props) => {
  // depenfing on prop "type" it renders a button o Link
  if (type === "loadMore") {
    return (
      <button className={styles[type]} onClick={onclick}>
        {text}
      </button>
    );
  } else {
    return (
      <Link href={link || ""} className={styles[type]}>
        {text}
      </Link>
    );
  }
};

export default Button;
