import {
    CHANGE_LOCALE
} from "Constants/actionTypes";

export const changeLocale = (locale) = {
    localStorage.setItem("currentLanaguage", locale);
    return (
        {
            type: CHANGE_LOCALE,
            payload: locale
        }
    )
}