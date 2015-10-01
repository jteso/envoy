package logutils

import (
	"fmt"
	"io"
	"log"
	"os"
	"path"
	"runtime"
	"strings"
	"time"

	"github.com/mgutz/ansi"
)

var (
	blue_color     = ansi.ColorCode("blue")
	green_color    = ansi.ColorCode("green")
	magenta_color  = ansi.ColorCode("magenta")
	red_color      = ansi.ColorCode("red")
	dark_red_color = ansi.ColorCode("red+h")
	reset_color    = ansi.ColorCode("reset")
)

var (
	pid        = os.Getpid()
	NO_DUMP    = false
	DUMP       = true
	FileLogger *Logger
)

type Logger struct {
	log *log.Logger
}

// Aux methods
var ConsoleFilter = &LevelFilter{
	Levels:   []LogLevel{"DEBUG", "INFO", "WARN", "ERROR", "FATAL"},
	MinLevel: "INFO",
	Writer:   os.Stdout,
}

var fileFilter = &LevelFilter{
	Levels:   []LogLevel{"DEBUG", "INFO", "WARN", "ERROR", "FATAL"},
	MinLevel: "INFO",
	Writer:   createLogFile("."),
}

func New(filter *LevelFilter) *Logger {
	return &Logger{
		log: log.New(filter, "", 0),
	}
}

func createLogFile(fileDir string) io.Writer {
	// Create the dir if it does not exist
	if _, err := os.Stat(fileDir); os.IsNotExist(err) {
		os.Mkdir(fileDir, 0777)
	}
	f, err := os.OpenFile(path.Join(fileDir, "server.log"), os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		log.Fatal("Error opening log file due to: %v", err)
	}
	return f
}

func InitFileLogger(path string, minLevel string) {
	minLevelCan := strings.ToUpper(minLevel)
	// Inject default values if they havent been set by user
	if path == "" {
		path = "."
	}
	if minLevelCan == "" {
		minLevelCan = "INFO"
	}

	filter := &LevelFilter{
		Levels:   []LogLevel{"DEBUG", "INFO", "WARN", "ERROR", "FATAL"},
		MinLevel: LogLevel(minLevelCan),
		Writer:   createLogFile(path),
	}
	FileLogger = New(filter)
}

func (l *Logger) Debug(format string, args ...interface{}) {
	l.log.Printf(blue_color + makeMessageWithDetails("DEBUG", format, args...) + reset_color)
}
func (l *Logger) Info(format string, args ...interface{}) {
	l.log.Printf(green_color + makeMessage("INFO", format, args...) + reset_color)
}
func (l *Logger) Warn(format string, args ...interface{}) {
	l.log.Printf(magenta_color + makeMessage("WARN", format, args...) + reset_color)
}
func (l *Logger) Error(format string, args ...interface{}) {
	l.log.Printf(dark_red_color + makeMessage("ERROR", format, args...) + reset_color)
}
func (l *Logger) Fatal(format string, args ...interface{}) {
	l.log.Printf(red_color + makeMessage("FATAL", format, args...) + reset_color)
	l.log.Printf(red_color + makeMessage("FATAL", stackTraces()) + reset_color)
	exit()
}

// --------------------
// Supporting methods
// --------------------

func makeMessageWithDetails(sev string, format string, args ...interface{}) string {
	file, line := callerInfo()
	now := time.Now()
	//return fmt.Sprintf("%s PID:%d [%s:%d] %s", sev, pid, file, line, fmt.Sprintf(format, args...))
	return fmt.Sprintf("%02d/%02d/%d %02d:%02d:%02d [%s] [%s:%d] %s", now.Day(), now.Month(), now.Year(), now.Hour(), now.Minute(), now.Second(), sev, file, line, fmt.Sprintf(format, args...))
}

func makeMessage(sev string, format string, args ...interface{}) string {
	now := time.Now()
	return fmt.Sprintf("%02d/%02d/%d %02d:%02d:%02d [%s] %s", now.Day(), now.Month(), now.Year(), now.Hour(), now.Minute(), now.Second(), sev, fmt.Sprintf(format, args...))
}

// Return stack traces of all the running goroutines.
func stackTraces() string {
	trace := make([]byte, 100000)
	nbytes := runtime.Stack(trace, true)
	return string(trace[:nbytes])
}

// Return a file name and a line number.
func callerInfo() (string, int) {
	_, file, line, ok := runtimeCaller(3) // number of frames to the user's call.

	if !ok {
		file = "unknown"
		line = 0
	} else {
		slashPosition := strings.LastIndex(file, "/")
		if slashPosition >= 0 {
			file = file[slashPosition+1:]
		}
	}

	return file, line
}

// runtime functions for mocking

var runtimeCaller = runtime.Caller

var exit = func() {
	os.Exit(255)
}

func Error(format string, a ...interface{}) {
	fmt.Printf("==> [ERROR] %s\n", fmt.Sprintf(format, a...))

}

func InfoBold(format string, a ...interface{}) {
	fmt.Printf(bold(fmt.Sprintf("==> %s\n", fmt.Sprintf(format, a...))))
}
func Info(format string, a ...interface{}) {
	fmt.Printf(fmt.Sprintf("==> %s\n", fmt.Sprintf(format, a...)))
}

// Other functions
func bold(str string) string {
	return "\033[1m" + str + "\033[0m"
}
