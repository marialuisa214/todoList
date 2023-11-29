import { Circle, Trash } from "@phosphor-icons/react";
import styles from './List.module.css';
export function List() {
    return(
        <div className={styles.list}>
            <div className={styles.listInfo}>
                <div className={styles.boxInfo}>
                    <strong>tarefas Criadas</strong>
                    <strong className={styles.boxNumberActivit}>6</strong>
                </div>
                <div className={styles.boxInfo}>
                    <strong>Concluidas</strong>
                    <strong className={styles.boxNumberActivit}> 2 de 6</strong>
                </div>
            </div>





            <div className={styles.boxActivit}>
                <div className={styles.activit}>
                    <button className={styles.circle}>
                        <Circle/>
                    </button>
                    <p>Tenho que lavar a louça</p>
                </div>
                <button className={styles.trash}>
                    <Trash/>
                </button>
            </div>

            <div className={styles.boxActivit}>
                <div className={styles.activit}>
                    <button className={styles.circle}>
                        <Circle/>
                    </button>
                    <p>Tenho que lavar a louça</p>
                </div>
                <button className={styles.trash}>
                    <Trash/>
                </button>
            </div>

            <div className={styles.boxActivit}>
                <div className={styles.activit}>
                    <button className={styles.circle}>
                        <Circle/>
                    </button>
                    <p>Tenho que lavar a louça</p>
                </div>
                <button className={styles.trash}>
                    <Trash/>
                </button>
            </div>
        
        </div>
    )
}