export const paths = {
    LOGIN                : "https://lms.infnet.edu.br/moodle/login/token.php?",
    PATH_BASE            : "https://lms.infnet.edu.br/moodle/webservice/rest/server.php?",
}

export const services = {
    SERVICE              : "&service=moodle_mobile_app",
    MOODLEJSON           : "moodlewsrestformat=json",
    FILTER               : "&moodlewssettingfilter=true",
    FILE_URL             : "&moodlewssettingfileurl=true"
}

export const wsfunction = {
    DATA_USER            : "&wsfunction=core_webservice_get_site_info",
    COLLEGE_SUBJECTS     : "&wsfunction=core_enrol_get_users_courses",
    COMPETENCE           : "&wsfunction=tool_lp_data_for_course_competencies_page"
}

export const autentication = {
    USERNAME             : "&username=",
    PASSWORD             : "&password=",
    WSTOKEN              : "&wstoken=",
    USERID               : "&userid="
}
