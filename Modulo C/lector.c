

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {

    int fd[2];
    char buffer[1000];

    if (pipe(fd) == -1) {
        perror("Error en el pipe");
        return -1;
    }

    pid_t PidLector  = fork();

    if(PidLector == -1){
        perror("fork");
        exit(1);
    }

    if (PidLector == 0) { 
 
        close(fd[0]);   
        dup2(fd[1], STDOUT_FILENO); 
        execlp("sudo", "sudo", "stap", "trace.stp", NULL);
    } else {  
        close(fd[1]);

        ssize_t nbytes;
        while ((nbytes = read(fd[0], buffer, sizeof(buffer))) > 0) {

            buffer[nbytes] = '\0';
            printf("%s \n", buffer);      
        }

        wait(NULL);
    }

    return 0;
}


