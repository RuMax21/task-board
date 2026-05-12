import { useAuthStore } from '@/features/Auth/model';
import { ChangePasswordForm } from '@/features/Auth/ui/ChangePasswordForm/ChangePasswordForm';
import { useLanguage } from '@/shared/i18n';
import type { ReactElement } from 'react';
import styles from './ProfilePage.module.scss';

export default function ProfilePage(): ReactElement {
  const { text } = useLanguage();
  const { user } = useAuthStore();
  const profileInfo = [
    { label: text.profile.nickname, value: user?.nickname },
    { label: text.profile.email, value: user?.email },
    { label: text.profile.role, value: user?.role },
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{text.profile.title}</h1>
      <div className={styles.info}>
        {profileInfo.map(info => (
          <div className={styles.row} key={info.label}>
            <span className={styles.rowLabel}>{info.label}</span>
            <span className={styles.rowValue}>{info.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.divider} />
      <ChangePasswordForm />
    </section>
  );
}
